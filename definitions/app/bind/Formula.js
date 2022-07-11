/**
 * Definition for a ViewModel formula. Formulas take two forms:
 *
 * 1) The simple form. This is when only a getter function is specified, without a setter
 * or any other properties, and the generated code is therefore just a function.
 *
 * 2) The complex form. This is when a setter function is also specified, or one of the
 * other config properties are set. In this case the generated code is an object with
 * a 'get' function property plus the other properties.
 *
 * To simplify the UX around these two cases, in the inspector we always treat it as if it
 * has the complex form -- the getter function is presented as a child function of the
 * formula itself, which is automatically added and cannot be removed. The user can then
 * add their own 'set' function, or set any of the other configs; if they do not, then
 * we optimize our codegen to just output the getter function alone.
 */
xds.component.Registry.addDefinition({
    override: 'Ext.app.bind.Formula',
    typeAlias: 'viewmodelformula',
    mixin: ['baseutil'],

    toolbox: {
        name: 'Formula',
        iconCls: 'icon-formula-function',
        category: 'Behaviors',
        groups: ['Behaviors']
    },

    validParentTypes: ['viewmodel'],
    ignoreCreateCfgs: true,

    ignoreCfgs: [
        // The 'get' function is special because the name of its param needs to change
        // based on whether the 'bind' cfg is set; we can't do this with the flyweight
        // cfg so we ignore it, then add it back as an instance-local cfg upon creation.
        'get'
    ],

    cfgs: [
        {
            name: 'bind',
            merge: false,
            type: 'string',
            alternates: [{
                type: 'object'
            }]
        },
        {
            name: 'set',
            merge: true,
            params: ['value']
            // NOTE: we don't injectInCanvas since 2-way binding shouldn't happen there
        },
        {
            name: 'name',
            type: 'string',
            required: true,
            regex: xds.Resource.get('validFunction').regex,
            regexText: xds.Resource.get('validFunction').regexText
        }
    ],

    init: function() {
        var me = this;
        me.on({
            setup: me.onSetup,
            addchild: me.onAddOrRestoreChild,
            restorechild: me.onAddOrRestoreChild,
            beforeremovechild: me.onBeforeRemoveChild,
            beforecreateref: me.onBeforeCreateRef,
            cfgchange: me.onCfgChange,
            validate: me.onValidate,
            canvasconfig: me.onCanvasConfig,
            scope: me
        });

        // Add the 'get' function as an instance-local cfg so we can safely modify its params
        this.addCfg({
            name: 'get',
            type: 'function',
            params: [this.getGetFnParam()],
            injectInCanvas: true
        });

        me.setReference({name: 'formulas', type: 'array'});
    },

    onSetup: function() {
        // Create the 'get' function child automatically, as it's always needed
        this.flyCfg('get').createRef();
    },

    onBeforeCreateRef: function() {
        return [{
            message: xds.app.Resource.get('createRef').formula,
            cfg: 'name',
            editor: {
                type: 'string'
            }
        }];
    },

    onAddOrRestoreChild: function(child) {
        // The 'get' and 'set' functions execute with the ViewModel as their 'this' scope
        if (child.isType('fixedfunction')) {
            child.thisType = 'Ext.app.ViewModel';
        }
    },

    onBeforeRemoveChild: function(child) {
        // Prevent removal of the 'get' function, it's always required
        if (child === this.flyCfg('get').getFunctionInstance()) {
            return false;
        }
    },

    onCfgChange: function(name, value, oldValue) {
        // If the 'bind' cfg is being set or unset, update the 'get' function's params to match
        if (name === 'bind' && ((value && !oldValue) || (!value && oldValue))) {
            this.updateGetFnParam();
        }
    },

    onValidate: function() {
        // require the name config to be set
        if (!this.isCfgSet('name')) {
            return xds.Resource.get('viewModel').formulaName;
        }
    },

    onCanvasConfig: function(config) {
        // Pre-wrap the 'get' function body with try/catch, because the original body content must
        // be available for the formula parser to find the viewmodel dependencies and the
        // usual wrapping done by CanvasConfigEncoding hides the original body content.
        // This isn't necessary when an explicit 'bind' is set because the function isn't parsed then.
        if (!config.bind) {
            var getFn = this.flyCfg('get').getFunctionInstance(),
                formulaName = this.getCfgValue('name'),
                fnBody;
            if (formulaName && getFn) {
                fnBody = 'function(get) {' +
                    'try {' +
                        (getFn.getCfgValue('implHandler') || '') +
                    '} catch(e) {' +
                        'xds.messaging.notify("frameworkerror", "Error in formula {' + formulaName + '}: " + e.message, null, null);' +
                    '}' +
                '}';
                config.get = Ext4.create('xds.ui.canvas.CanvasConfigEncoding').encodeCanvasValueAsType(fnBody, 'rawfunction');
            }
        }
        return config;
    },


    /**
     * Update the name of the getter function's parameter. When there is an explicit `bind`
     * config set then it's an object called 'data', otherwise it's a function called 'get'.
     */
    updateGetFnParam: function() {
        var getCfg = this.flyCfg('get'),
            getFn = getCfg.getFunctionInstance(),
            param = this.getGetFnParam(),
            oldParams;

        getCfg.setParams([param]);
        if (getFn) {
            // If we're changing an old existing param name that may have already been
            // used in the function body, perform a rename in the body
            oldParams = getFn.getCfgValue('designer|params');
            if (oldParams && oldParams[0] && param.name !== oldParams[0]) {
                getFn.renameParamInImpl(oldParams[0], param.name);
            }

            getFn.setCfgValue('designer|params', [param.name]);
        }
    },

    getGetFnParam: function() {
        if (this.isCfgSet('bind')) {
            return {
                name: 'data',
                type: 'Object'
            };
        } else {
            return {
                name: 'get',
                type: 'Function'
            };
        }
    }
});
