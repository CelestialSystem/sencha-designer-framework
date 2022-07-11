(function() {

var CODEGEN = xds.component.CodeGeneration;
CODEGEN.normalize = function(codeConfig) {
    return codeConfig;
};


/**
 * Adjusts the codeconfig as needed for class tpls. This is used as the `prepareData`
 * member method for those tpls that need it.
 */
function prepareClassConfig(codeConfig, instance) {
    var isTop = instance.isTop();

    // For top-level instances we want to put all custom configs, whether primitive
    // or complex, into the config:{} block so they get generated getters/setters.
    // For now we skip this for class types that don't (or we can't determine
    // whether they) call initConfig.
    if (isTop && !instance.isType('class') && !instance.isModelDefinition()) {
        var configs = codeConfig.configs,
            bindRef = codeConfig.bindRef;
        if (configs) {
            codeConfig.customConfigs = configs.filter(function(config) {
                return !!config.custom;
            });

            codeConfig.configs = configs.filter(function(config) {
                return !config.custom;
            });
        }

        // For custom configs set to bind, we still need them in the config:{} block
        // so they get their setter, though their value will remain in the bind:{} block
        if (bindRef) {
            bindRef.value.configs.forEach(function(config) {
                if (config.custom) {
                    var customConfigs = codeConfig.customConfigs || (codeConfig.customConfigs = []);
                    customConfigs.push({
                        name: config.name,
                        primitive: true,
                        type: 'raw',
                        value: null,
                        rawValue: 'null'
                    });
                }
            });
        }
    }

    // For refs on views, we need to categorize them into refs that can exist safely on
    // the class body and those that need to be wrapped within initConfig.
    if (isTop && codeConfig.refs && (instance.isType('viewbehavior') || instance.isType('viewmodelbehavior'))) {
        codeConfig.refs.forEach(function(ref) {
            if (!isComplexRef(ref)) {
                ref.primitive = true; //this gets picked up in the main generateCode method
            }
        });
    }

    return codeConfig;
}

/**
 * Determine whether a codeconfig 'refs' object qualifies as "complex", meaning it
 * needs to be wrapped inside an initConfig method rather than going directly on
 * the class body. The criteria for determining complex refs are:
 *   - Those with a processConfig function
 *   - Those that use $codeClass to force direct instantiation via Ext.create()
 *   - Those with an inline function (e.g. a 'handler' config) - this is mainly to
 *     prevent breaking old functions where the user's code makes use of the 'me'
 *     variable from the closure. That's poor practice anyway so we may consider
 *     relaxing it in the future, if we can come up with a good migration strategy.
 */
function isComplexRef(ref) {
    var value = ref.value;
    if (Ext4.isArray(value)) {
        return value.some(isComplexRefConfig);
    } else {
        return isComplexRefConfig(value);
    }
}
function isComplexRefConfig(refConfig) {
    if (refConfig.processCfg || refConfig.$codeClass) {
        return true;
    }
    if (refConfig.configs && refConfig.configs.some(configNeedsInstanceClosure)) {
        return true;
    }
    // Recurse
    if (refConfig.refs) {
        return refConfig.refs.some(isComplexRef);
    }
    return false;
}
function configNeedsInstanceClosure(config) {
    if (config.type === 'builtFunction' && (!config.params || config.params.indexOf('me') === -1)) {
        // The function only needs to go in the closure if its contents use the 'me' var
        // Start with a simple regex check to weed out obvious cases and avoid unnecessary parsing
        if (config.body && /\bme\b/.test(config.body)) {
            if (usesMeVarFromClosure(config.body)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Utility function that scans through a code snippet and returns true if that
 * code contains a reference to the 'me' var from the outer closure.
 * @param {String} code
 */
function usesMeVarFromClosure(code) {
    var result = null;

    function search(node, parentType, key) {
        var prop, i, len, childNode;
        if (node.type === 'Identifier') {
            if (node.name === 'me' &&
                !(parentType === 'Property' && key === 'key') && // ignore object literal keys e.g. {foo: 1}
                key !== 'property' // ignore object property references e.g. obj.foo
            ) {
                // Found a 'me' var; is it locally defined or using the one from the closure?
                result = !(parentType === 'VariableDeclarator' && key === 'id');
            }
        } else {
            for (prop in node) {
                if (node.hasOwnProperty(prop)) {
                    if (Ext4.isObject(node[prop])) {
                        search(node[prop], node.type, prop);
                    } else if (Ext4.isArray(node[prop])) {
                        for (i = 0, len = node[prop].length; i < len; i++) {
                            childNode = node[prop][i];
                            if (Ext4.isObject(childNode)) {
                                search(childNode, node.type, prop);
                                if (result !== null) {
                                    return; //got a result; short-circuit the loop
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    try {
        var syntaxTree = esprima.parse(code);
        search(syntaxTree);
        return result || false;
    } catch(e) {
        return false;
    }
}


CODEGEN.customConfigs = [
    '<tpl if="customConfigs && customConfigs.length">',
        ',', '{[this.newline()]}', '{[this.newline()]}',
        '{[this.indent(1)]}', 'config: {',
        '<tpl for="customConfigs">',
            '{[this.newline()]}',
            '{[this.trackOpen(values, true)]}',
            '{[this.indent(2)]}', '{[this.encodeConfigName(values.name)]}: {[this.encodeConfig(values, 2)]}', '{[this.endingComma(xcount, xindex)]}',
            '{[this.trackClose(values, true)]}',
        '</tpl>',
        '{[this.newline()]}',
        '{[this.indent(1)]}', '}',
    '</tpl>'
].join('');

// Ext 4 specific template helpers
var templateHelpers = Ext4.apply(CODEGEN.templateHelpers, {
    methodIndentLevel: 1,
    nameIdx: 0,
    camelCase: function(value, index) {
        if (!value) {
            if (!index) {
                index = this.nameIdx++;
            }
            return 'cmp' + index;
        } else {
            return value.charAt(0).toLowerCase() + value.substr(1);
        }
    },

    variableName: function(index) {
        return this.camelCase(null, index);
    },

    params: function(params) {
        var names = Ext4.Array.map(params, function(param) {
            return param.name;
        });
        return names.join(', ');
    },

    encodeControl: function(control) {
        var tpls = xds.component.CodeGeneration.templates,
            tplControl = tpls.get('controller.control'),
            snippets = [];
        // iterate the queries
        Ext4.Object.each(control, function(query, actions) {
            var listeners = [],
                name,
                fn;

            actions.forEach(function(action) {
                name = action.getCfgValue('name');
                fn = action.getCfgValue('fn');
                listeners.push({
                    event: name,
                    fn: fn,
                    designerId: action.getUniqueId()
                });
            });
            snippets.push({ query: query, listeners: listeners });
        });

        return tplControl.apply({ snippets: snippets });
    }
});

var classTemplateHelpers = Ext4.applyIf({
    prepareData: prepareClassConfig
}, templateHelpers);

var templates = CODEGEN.templates;

templates.add('applymethod', Ext4.create('Ext.XTemplate',
    '<tpl for=".">',
        '{[this.indent(2)]}','this.{.}.apply(this, arguments);','{[this.newline()]}',
    '</tpl>',
    templateHelpers
));
templates.get('applymethod').cfg = {};

templates.add('cmpbaseclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">',
            ',', '{[this.newline()]}',
            '{[this.indent(1)]}alias: \'{userAlias}\'',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        CODEGEN.customConfigs,
        '<tpl if="configs && configs.length">',
            ',', '{[this.newline()]}',
            '<tpl for="configs">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[this.encodeConfig(values, 1)]}', '{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, false)]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="primitiveRefs && primitiveRefs.length">',
            ',', '{[this.newline()]}',
            '<tpl for="primitiveRefs">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[this.encodeRef(values.value, 1)]}', '{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, false)]}',
            '</tpl>',
        '</tpl>',
        // NOTE: must use values.foo instead of just foo to avoid ReferenceErrors that will short-circuit the conditional
        '<tpl if="(values.complexRefs && values.complexRefs.length) || values.processCfg">',
            ',', '{[this.newline()]}{[this.newline()]}',
            '{[this.indent(1)]}', 'initConfig: function(instanceConfig) {', '{[this.newline()]}',
                '{[this.indent(2)]}var me = this,', '{[this.newline()]}',
                '{[this.indent(3)]}config = {',
                '<tpl if="complexRefs && complexRefs.length">',
                    '{[this.newline()]}',
                    '<tpl for="complexRefs">',
                        '{[this.trackOpen(values, true)]}',
                        '{[this.indent(4)]}{[this.encodeConfigName(values.name)]}: {[this.encodeRef(values.value, 4)]}',
                        '<tpl if="xindex != xcount">,</tpl>',
                        '{[this.newline()]}',
                        '{[this.trackClose(values, false)]}',
                    '</tpl>',
                    '{[this.indent(3)]}',
                '</tpl>',
                '};', '{[this.newline()]}',
                '<tpl if="processCfg">',
                    '{[this.indent(2)]}me.{processCfg}(config);', '{[this.newline()]}',
                '</tpl>',
                '{[this.indent(2)]}', 'if (instanceConfig) {', '{[this.newline()]}',
                    '{[this.indent(3)]}', 'me.self.getConfigurator().merge(me, config, instanceConfig);', '{[this.newline()]}',
                '{[this.indent(2)]}', '}', '{[this.newline()]}',
                '{[this.indent(2)]}', 'return me.callParent([config]);', '{[this.newline()]}',
            '{[this.indent(1)]}', '}',
        '</tpl>',
        '<tpl if="methods.length">',',','</tpl>','{[this.newline()]}','{[this.newline()]}',
        '<tpl for="methods">',
            CODEGEN.methodDefinition,
        '</tpl>',
    '});',
    classTemplateHelpers
));

// We'll reuse the component template for viewmodels since they work the same in terms
// of putting most things on the class body and complex refs in initConfig. We can
// differentiate them in the future if needed.
templates.add('viewmodelclass', templates.get('cmpbaseclass'));

templates.add('baseclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">',
            ',', '{[this.newline()]}',
            '{[this.indent(1)]}alias: \'{userAlias}\'',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        CODEGEN.customConfigs,
        '<tpl if="primitiveConfigs && primitiveConfigs.length">',
            ',', '{[this.newline()]}',
            '<tpl for="primitiveConfigs">',
                '{[this.newline()]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[this.encodeConfig(values, 1)]}', '{[this.endingComma(xcount, xindex)]}',
                '{[this.trackLine(values, true)]}',
            '</tpl>',
        '</tpl>',
        ',', '{[this.newline()]}{[this.newline()]}',
        '{[this.indent(1)]}constructor: function(cfg) {', '{[this.newline()]}',
            '{[this.indent(2)]}var me = this;', '{[this.newline()]}',
            '{[this.indent(2)]}cfg = cfg || {["{}"]};', '{[this.newline()]}',
            '{[this.indent(2)]}me.callParent([Ext.apply({', '{[this.newline()]}',
            '<tpl for="complexConfigs">',
                '{[this.trackLine(values, true)]}',
                '{[this.indent(3)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeConfig(values, 3) ]}',
                '<tpl if="xindex != xcount || parent.refs.length &gt; 0">,</tpl>',
                '{[this.newline()]}',
            '</tpl>',
            '<tpl for="refs">',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(3)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeRef(values.value, 3) ]}',
                '<tpl if="xindex != xcount">,</tpl>',
                '{[this.newline()]}',
                '{[this.trackClose(values, false)]}',
            '</tpl>',
            '{[this.indent(2)]}}, cfg)]);', '{[this.newline()]}',
        '{[this.indent(1)]}}',
        '<tpl if="methods.length">', ',', '{[this.newline()]}', '</tpl>', '{[this.newline()]}',
        '<tpl for="methods">',
            CODEGEN.methodDefinition,
        '</tpl>',
    '});',
    classTemplateHelpers
));

templates.add('simpleclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">',
            ',', '{[this.newline()]}',
            '{[this.indent(1)]}alias: \'{userAlias}\'',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        CODEGEN.customConfigs,
        '<tpl if="configs && configs.length">',
            ',', '{[this.newline()]}',
            '<tpl for="configs">',
                '{[this.newline()]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[this.encodeConfig(values, 1)]}', '{[this.endingComma(xcount, xindex)]}',
                '{[this.trackLine(values, true)]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="methods.length">', ',', '{[this.newline()]}', '</tpl>', '{[this.newline()]}',
        '<tpl for="methods">',
            CODEGEN.methodDefinition,
        '</tpl>',
    '});',
    classTemplateHelpers
));

templates.add('indexhtml', Ext4.create('Ext.XTemplate',
    '<!DOCTYPE HTML>', '{[this.newline()]}',
    '{[this.newline()]}',
    '<html manifest="" lang="en-US">', '{[this.newline()]}',
    '<head>', '{[this.newline()]}',
        '{[this.indent(1)]}<meta http-equiv="X-UA-Compatible" content="IE=edge">', '{[this.newline()]}',
        '{[this.indent(1)]}<meta charset="UTF-8">', '{[this.newline()]}',
        '<tpl if="this.cfg.favIcon.url && this.cfg.favIcon.mime">',
            '{[this.indent(1)]}<link rel="shortcut icon" href="{[this.cfg.favIcon.url]}" mime="{[this.cfg.favIcon.mime]}">', '{[this.newline()]}',
        '</tpl>',

        '{[this.indent(1)]}<title>{[this.cfg.title]}</title>', '{[this.newline()]}',

        '{[this.indent(1)]}<!-- The line below must be kept intact for Sencha Command to build your application -->', '{[this.newline()]}',
        '{[this.indent(1)]}<script id="microloader" type="text/javascript" src="bootstrap.js"></script>', '{[this.newline()]}',

        '<tpl for="this.cfg.resources">',
            '<tpl if="resourceType === \'band-aid-external-js\' && url">',
                '{[this.indent(1)]}', '<script src="{[this.src(values.url, this.cfg)]}"', '<tpl if="values.id"> id="{id}"</tpl>', '<tpl if="defer"> defer</tpl>', '></script>', '{[this.newline()]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="this.cfg.packageStylesheets && this.cfg.packageStylesheets.length">',
            '<tpl for="this.cfg.packageStylesheets">',
                '{[this.newline()]}',
                '{[this.indent(1)]}', '<link rel="stylesheet" href="{[values.fileName]}">', '{[this.newline()]}',
            '</tpl>',
            '{[this.newline()]}',
        '</tpl>',
        // '{[this.indent(1)]}<script type="text/javascript" src="{[this.src(xds.app.Structure.getIndexJsFileName(), this.cfg)]}"></script>', '{[this.newline()]}',
    '</head>', '{[this.newline()]}',
    '<body>', '{[this.newline()]}',
    '</body>', '{[this.newline()]}',
    '</html>'
));

templates.add('apphtml', Ext4.create('Ext.XTemplate',
    '<!DOCTYPE html>', '{[this.newline()]}',
    '{[this.newline()]}',
    '<!-- Auto Generated with ', xds.appName, ' -->', '{[this.newline()]}',
    '<!-- Modifications to this file will be overwritten. -->', '{[this.newline()]}',
    '<html>', '{[this.newline()]}',
    '<head>', '{[this.newline()]}',
        '{[this.indent(1)]}<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />', '{[this.newline()]}',
        '{[this.indent(1)]}<title>{[this.cfg.title]}</title>', '{[this.newline()]}',
        '<tpl if="this.cfg.favIcon.url && this.cfg.favIcon.mime">',
            '{[this.indent(1)]}<link rel="shortcut icon" href="{[this.cfg.favIcon.url]}" mime="{[this.cfg.favIcon.mime]}">', '{[this.newline()]}',
        '</tpl>',

        // Ext.theme.name must be set before loading the library in order for platformConfig to
        // be applied. This is only relevant during dev, as a Cmd-built app will choose the theme
        // and set this at load time based on the platform.
        '{[this.indent(1)]}<script>', '{[this.newline()]}',
            '{[this.indent(2)]}', 'var Ext = Ext || {["{}"]};', '{[this.newline()]}',
            '{[this.indent(2)]}', 'Ext.theme = {', '{[this.newline()]}',
            '{[this.indent(3)]}', 'name: "{[this.cfg.application.themeName]}"', '{[this.newline()]}',
            '{[this.indent(2)]}', '};', '{[this.newline()]}',
        '{[this.indent(1)]}</script>', '{[this.newline()]}',
        '<tpl for="this.cfg.resources">',
            // We specifically reference values.id here because otherwise we will go up to the variable
            // scope chain and find window.id which equals "window-id"
            '<tpl if="resourceType === \'js\' && url && !values.includeAfterAppJS">',
                '{[this.indent(1)]}', '<script src="{[this.src(values.url, this.cfg)]}"', '<tpl if="values.id"> id="{id}"</tpl>', '<tpl if="defer"> defer</tpl>', '></script>', '{[this.newline()]}',
            '</tpl>',
            '<tpl if="resourceType === \'css\' && url">',
                '{[this.indent(1)]}', '<link rel="stylesheet" href="{[this.src(values.url, this.cfg)]}"', '<tpl if="values.id"> id="{id}"</tpl>', '>', '{[this.newline()]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="this.cfg.packageStylesheets && this.cfg.packageStylesheets.length">',
            '{[this.newline()]}',
            '<tpl for="this.cfg.packageStylesheets">',
                '{[this.indent(1)]}', '<link rel="stylesheet" href="{[values.fileName]}">', '{[this.newline()]}',
            '</tpl>',
            '{[this.newline()]}',
        '</tpl>',
        '{[this.indent(1)]}<script type="text/javascript" src="{[this.src(xds.app.Structure.getIndexJsFileName(), this.cfg)]}"></script>', '{[this.newline()]}',
        '<tpl for="this.cfg.resources">',
            '<tpl if="resourceType === \'js\' && url && includeAfterAppJS">',
                '{[this.indent(1)]}', '<script src="{[this.src(values.url, this.cfg)]}"', '<tpl if="values.id"> id="{id}"</tpl>', '<tpl if="defer"> defer</tpl>', '></script>', '{[this.newline()]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="this.cfg.packageRequires && this.cfg.packageRequires.length">',
            '<tpl for="this.cfg.packageRequires">',
                '{[this.newline()]}',
                '{[this.indent(1)]}<script src="{[values.fileName]}"></script>',
            '</tpl>',
            '{[this.newline()]}',
        '</tpl>',
    '</head>', '{[this.newline()]}',
    '<body></body>', '{[this.newline()]}',
    '</html>',
    templateHelpers
));

templates.add('indexjs', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    '// @require @packageOverrides', '{[this.newline()]}',
    'Ext.Loader.setConfig({[this.encodeRef(values.loader, 0)]});', '{[this.newline()]}',
    '{[this.newline()]}',
    '<tpl if="packageScripts && packageScripts.length">',
        '<tpl for="packageScripts">',
            '{[this.newline()]}',
            'Ext.Loader.setPath({[this.encodeConfigName(values.className)]},{[this.encodeConfigName(values.fileName)]});',
        '</tpl>',
        '{[this.newline()]}',
    '</tpl>',
    '{[this.newline()]}',
    'Ext.application({','{[this.newline()]}',
        '<tpl for="configs">',
            '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeConfig(values, 1) ]}',
            '<tpl if="xindex != xcount">,{[this.newline()]}</tpl>',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        '<tpl if="routes.length">',
            ',', '{[this.newline()]}', '{[this.newline()]}',
            '{[this.indent(1)]}routes: {',
            '<tpl for="routes">',
                '{[this.newline()]}',
                '{[this.encodeProperty(values, "url", "action", 2)]}',
                '{[this.endingComma(xcount, xindex)]}',
            '</tpl>',
            '{[this.newline()]}',
            '{[this.indent(1)]}', '}',
        '</tpl>',
        '<tpl if="members.length">',',{[this.newline()]}','{[this.newline()]}',
            '<tpl for="members">',
                '{[this.newline()]}',
                '{[this.encodeMember(values)]}','{[this.endingComma(xcount, xindex)]}','{[this.newline()]}',
                '{[this.newline()]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="methods.length">',',','{[this.newline()]}','{[this.newline()]}',
            '<tpl for="methods">',
                CODEGEN.methodDefinition,
            '</tpl>',
        '</tpl>',
        '<tpl if="!methods || !methods.length">','{[this.newline()]}','</tpl>',
    '});', '{[this.newline()]}',
    templateHelpers
));
templates.get('indexjs').cfg = {};


//controllerclass is used by Class.js for controller components
templates.add('controllerclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">',
        ',', '{[this.newline()]}',
        '{[this.indent(1)]}alias: \'{userAlias}\'', '{[this.trackLine(values.userAlias, true)]}',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        CODEGEN.customConfigs,
        '<tpl if="configs.length">',
            ',', '{[this.newline()]}',
            '<tpl for="configs">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeConfig(values, 1) ]}','{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, false)]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="processCfg">',
            ',', '{[this.newline()]}', '{[this.newline()]}',
            '{[this.indent(1)]}','constructor: function(cfg) {','{[this.newline()]}',
            '{[this.indent(2)]}','cfg = cfg || {["{}"]};','{[this.newline()]}',
            '{[this.indent(2)]}','this.callParent(this.{processCfg}(cfg));','{[this.newline()]}',
            '{[this.indent(1)]}','}',
        '</tpl>',
        '<tpl if="routes.length">',
            ',', '{[this.newline()]}', '{[this.newline()]}',
            '{[this.indent(1)]}routes: {',
            '<tpl for="routes">',
                '{[this.newline()]}',
                '{[this.encodeProperty(values, "url", "action", 2)]}',
                '{[this.endingComma(xcount, xindex)]}',
            '</tpl>',
            '{[this.newline()]}',
            '{[this.indent(1)]}', '}',
        '</tpl>',
        '<tpl if="references.length">',
            ',', '{[this.newline()]}', '{[this.newline()]}',
            '{[this.indent(1)]}refs: {',
            '<tpl for="references">',
                '{[this.newline()]}',
                '{[this.encodeProperty(values, "ref", "selector", 2)]}',
                '{[this.endingComma(xcount, xindex)]}',
            '</tpl>',
            '{[this.newline()]}',
            '{[this.indent(1)]}', '}',
        '</tpl>',
        '<tpl if="Ext4.Object.getSize(control)">',
            ',','{[this.newline()]}', '{[this.newline()]}',
            '{[this.getIndentedBlock(this.encodeControl(values.control), 1, false, true)]}',
        '</tpl>',
        '<tpl if="members.length">',
            ',', '{[this.newline()]}',
            '<tpl for="members">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.encodeMember(values)]}','{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, true)]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="methods.length">',
            ',', '{[this.newline()]}','{[this.newline()]}',
            '<tpl for="methods">',
                CODEGEN.methodDefinition,
            '</tpl>',
        '</tpl>',
        '<tpl if="!methods || !methods.length">','{[this.newline()]}','</tpl>',
    '});', '{[this.newline()]}',
    classTemplateHelpers
));
templates.get('controllerclass').cfg = {};

templates.add('controller.control', Ext4.create('Ext.XTemplate',
    'control: {', '{[this.newline()]}',
    '<tpl for="snippets">',
        '"{query}": {', '{[this.newline()]}', '{[this.trackOpen(values, false)]}',
        '<tpl for="listeners">',
            '{[this.indent(1)]}', '{event}: ', "'{fn}'", '{[this.endingComma(xcount, xindex)]}', '{[this.newline()]}', '{[this.trackLine(values)]}',
        '</tpl>',
        '}', '{[this.endingComma(xcount, xindex)]}', '{[this.newline()]}', '{[this.trackClose(values, false)]}',
    '</tpl>',
    '}',
    templateHelpers
));
templates.get('controller.control').cfg = {};

templates.add('controller.applisteners', Ext4.create('Ext.XTemplate',
    '{[this.indent(2)]}application.on({', '{[this.newline()]}',
    '<tpl for="events">',
        '{[this.indent(3)]}', '{[this.encodeConfigName(values.name)]}: {', '{[this.newline()]}', '{[this.trackOpen(values, false)]}',
        '<tpl for="listeners">',
            '{[this.encodeSimpleConfig(values.action, 4)]}','{[this.newline()]}',  '{[this.trackLine(values)]}',
        '</tpl>',
        '{[this.indent(3)]}', '}', '{[this.endingComma(xcount, xindex)]}', '{[this.newline()]}', '{[this.trackClose(values, false)]}',
    '</tpl>',
    '{[this.indent(2)]}', '});',
    templateHelpers
));
templates.get('controller.applisteners').cfg = {};


templates.add('storeclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">',
            ',', '{[this.newline()]}',
            '{[this.indent(1)]}alias: \'{userAlias}\'', '{[this.trackLine(values.userAlias, true)]}',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        CODEGEN.customConfigs,
        ',', '{[this.newline()]}{[this.newline()]}',
        '{[this.indent(1)]}constructor: function(cfg) {', '{[this.newline()]}',
            '{[this.indent(2)]}var me = this;', '{[this.newline()]}',
              '<tpl if="customEvents && customEvents.length">',
                '{[this.indent(2)]}me.addEvents(', '{[this.newline()]}',
                    '<tpl for="customEvents">',
                        '{[this.indent(3)]}{[this.encodeString(values)]}', '{[this.endingComma(xcount, xindex)]}', '{[this.newline()]}', '{[this.trackLine(values)]}',
                    '</tpl>',
                '{[this.indent(2)]}', ');', '{[this.newline()]}{[this.newline()]}',
            '</tpl>',
            '{[this.indent(2)]}cfg = cfg || {["{}"]};', '{[this.newline()]}',
            '{[this.indent(2)]}me.callParent([Ext.apply(',
            '<tpl if="processCfg">',
                'me.{processCfg}(',
            '</tpl>',
            '{', '{[this.newline()]}',
            '<tpl for="configs">',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(3)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeConfig(values, 3) ]}',
                '<tpl if="xindex != xcount || parent.refs.length &gt; 0">,</tpl>',
                '{[this.trackClose(values, true)]}',
                '{[this.newline()]}',
            '</tpl>',
            '<tpl for="refs">',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(3)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeRef(values.value, 3) ]}',
                '<tpl if="xindex != xcount">,</tpl>',
                '{[this.newline()]}',
                '{[this.trackClose(values, false)]}',
            '</tpl>',
            '{[this.indent(2)]}}',
            '<tpl if="processCfg">',
                ')',
            '</tpl>',
            ', cfg)]);', '{[this.newline()]}',
        '{[this.indent(1)]}}',
        '<tpl if="methods.length">',',','{[this.newline()]}','{[this.newline()]}',
            '<tpl for="methods">',
                CODEGEN.methodDefinition,
            '</tpl>',
        '</tpl>',
        '<tpl if="!methods || !methods.length">','{[this.newline()]}','</tpl>',
    '});',
    classTemplateHelpers
));


//modelclass is used by Class.js for data models
templates.add('modelclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{qualifiedClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}extend: \'{qualifiedSuperclassName}\'',
        '<tpl if="userAlias">,{[this.newline()]}',
        '{[this.indent(1)]}alias: \'{userAlias}\'',
        '</tpl>',
        CODEGEN.classLevelConfigs,
        '<tpl if="configs.length">,{[this.newline()]}',
            '<tpl for="configs">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeConfig(values, 1) ]}{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, true)]}',
            '</tpl>',
        '</tpl>',
        '<tpl if="refs.length">,{[this.newline()]}',
            '<tpl for="refs">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.indent(1)]}{[this.encodeConfigName(values.name)]}: {[ this.encodeRef(values.value, 1) ]}',
                '{[this.trackClose(values, true)]}',
                '<tpl if="xcount !== xindex">',',{[this.newline()]}','</tpl>',
            '</tpl>',
        '</tpl>',
        '<tpl if="processCfg">',',','{[this.newline()]}','{[this.newline()]}',
            '{[this.indent(1)]}','constructor: function() {','{[this.newline()]}',
            '{[this.indent(2)]}','var me = this;','{[this.newline()]}',
            '{[this.indent(2)]}','me.{processCfg}(me);','{[this.newline()]}',
            '{[this.indent(2)]}','me.callParent(arguments);','{[this.newline()]}',
            '{[this.indent(1)]}','}',
        '</tpl>',
        '<tpl if="members.length">',',{[this.newline()]}',
            '<tpl for="members">',
                '{[this.newline()]}',
                '{[this.trackOpen(values, true)]}',
                '{[this.encodeMember(values)]}','{[this.endingComma(xcount, xindex)]}',
                '{[this.trackClose(values, true)]}',
                '<tpl if="xcount !== xindex">',',{[this.newline()]}','</tpl>',
            '</tpl>',
        '</tpl>',
        '<tpl if="methods.length">',',','{[this.newline()]}','{[this.newline()]}',
            '<tpl for="methods">',
                CODEGEN.methodDefinition,
            '</tpl>',
        '</tpl>',
        '<tpl if="!methods || !methods.length">','{[this.newline()]}','</tpl>',
    '});',
    templateHelpers
));
templates.get('modelclass').cfg = {};

templates.add('overrideclass', Ext4.create('Ext.XTemplate',
    CODEGEN.classLevelComment,
    'Ext.define(\'{overrideClassName}\', {', '{[this.newline()]}',
        '{[this.indent(1)]}override: \'{qualifiedClassName}\'', '{[this.newline()]}',
        '{[this.indent(1)]}', '{[this.newline()]}',
    '});',
    templateHelpers
));
templates.get('overrideclass').cfg = {};

templates.add('duplicateEventsStub', Ext4.create('Ext.XTemplate',
    'var me = this,', '{[this.newline()]}',
    '    args = Ext.toArray(arguments, 0, -1);',
    '<tpl for=".">',
        '{[this.newline()]}',
        '<tpl if="xindex === 1">',
            'args.unshift(\'{.}\');',
        '<tpl else>',
            'args[0] = \'{.}\';',
        '</tpl>',
        '{[this.newline()]}',
        'me.fireEvent.apply(me, args);',
    '</tpl>'
));


// Override with some CodeGeneration methods
Ext4.override(xds.component.Definition, {

    /**
     * @override
     * For Ext5 we still need to roll up duplicate listeners, but we do so within the
     * listeners:{} block itself and don't need any extra stub methods on the class
     * for it. See getNormalizedListenersRef below.
     */
    needsEventHandlerStubMethod: function() {
        return false;
    },

    /**
     * Generates an array of configs for the methods that belong in the config block.
     */
    getConfigMethods: function() {
        var configs = [];

        if (!this.isTop()) {
            var fns = this.query('> basicfunction'),
                fnsLn = fns.length,
                fnIdx = 0,
                fn;

            for (; fnIdx < fnsLn; fnIdx++) {
                fn = fns[fnIdx];
                if (fn.isEditable()) {
                    // For function configs with a ViewController method name set, we want to
                    // just write the method name as a string
                    if (fn.isType('fixedfunction') && fn.isHoistedToViewController()) {
                        configs.push({
                            name: fn.getCfgValue('fn'),
                            type: 'string',
                            primitive: true,
                            rawValue: fn.getCfgValue('designer|viewControllerFn')
                        })
                    } else if (!fn.isType('abstracteventbinding') && !fn.isType('processcfgfunction')) {
                        configs.push({
                            name: fn.getCfgValue('fn'),
                            type: 'builtFunction',
                            params: fn.getParams(),
                            body: fn.getCfgValue('implHandler'),
                            designerId: fn.getUniqueId()
                        });
                    }
                }
            }
        }

        return configs;
    },

    /**
     * Generate and return an Array of configs for the event handler methods (non-stub)
     * of all basiceventbinding descendants.
     */
    getEventHandlerMethodConfigs: function() {
        var me = this,
            methodConfigs = [],
            eventBindings = me.query('processcfgfunction, basiceventbinding, > basicfunction');

        // Add the handler method for each event binding
        Ext4.Array.each(eventBindings, function(eventBinding) {
            var cfg = eventBinding.getEventBindingConfig();
            if (cfg) {
                methodConfigs.push(cfg);
            }
        }, me);

        return methodConfigs;
    },

    /**
     * Given a list of 'listener' refs, group them by event type and rearrange them into
     * an Object with the event type as property names.
     */
    getNormalizedListenersRef: function(listeners) {
        var me = this,
            newConfig = [],
            groupedListeners = {};

        if (listeners) {
            Ext4.Array.each(listeners, function(listener) {
                var config = listener.configs[0];
                groupedListeners[config.name] = groupedListeners[config.name] || [];
                groupedListeners[config.name].push(config);
            });
            Ext4.iterate(groupedListeners, function(key, value, groupedListeners) {
                // in the case where duplicate listeners are here, ie: 'click' and 'click'
                // we need to rename them to use unique event names, and create an additional
                // listener for the original event name which fires the others.
                var len = value.length,
                    i, listenerConfig, fakeEvents;
                if (len > 1) {
                    fakeEvents = [];
                    for (i = 0; i < len; i++) {
                        listenerConfig = value[i];
                        listenerConfig.name = '_' + listenerConfig.name + i;
                        fakeEvents.push(listenerConfig.name);

                        // remove the implHandler from the listener config
                        if (Ext4.isObject(listenerConfig.value)) {
                            delete listenerConfig.value.implHandler;
                            listenerConfig.rawValue = Ext4.encode(listenerConfig.value);
                        }

                        newConfig.push(listenerConfig);
                    }
                    newConfig.push({
                        name: key,
                        type: 'builtFunction',
                        params: [],
                        body: xds.component.CodeGeneration.templates.get('duplicateEventsStub').apply(fakeEvents)
                    });
                } else {
                    listenerConfig = value[0];

                    // remove the implHandler from the listener config
                    if (Ext4.isObject(listenerConfig.value)) {
                        delete listenerConfig.value.implHandler;
                        listenerConfig.rawValue = Ext4.encode(listenerConfig.value);
                    }

                    newConfig.push(listenerConfig);
                }
            });
            if (Ext4.isArray(listeners)) {
                listeners = listeners[0];
            }
            listeners.configs = newConfig;
        }

        return listeners;
    }
});

})();
