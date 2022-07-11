xds.component.Registry.addDefinition({
    override: "Ext.app.Application",
    typeAlias: 'application',
    mixin: ['common-applicationbehavior'],

    autoName: 'Application',
    toolbox: null,
    iconCls: 'icon-application',
    // cls to set on treeNode
    nodeCls: 'inspector-app',
    allowDrag: false,

    omitFrameworkCfgs: true,
    disableDeletion: true,
    allowInspectorClear: true,
    disableShadowState: true,

    validChildTypes: ['controlleraction', 'basicfunction', 'controllerref', 'viewport', 'loader', '!customevent'],
    singleChildTypes: ['viewport', 'loader'],

    // members ignored by Class.js
    reservedCfgs: ['config', 'models', 'stores', 'views', 'controllers', 'refs', 'control'],

    ignoreCfgs: [
        'alternateClassName',
        'before',
        'control',
        'currentProfile', // read only, set by framework
        'designer|userClassName',
        'designer|userAlias',
        'history', // read only, set by framework
        'init',
        'mixins',
        //'profiles', // Not supported yet
        'refs',
        'router', // read only, set by framework
        'routes',
        'singleton',
        'staticsRefGroup'
    ],

    cfgs: [{
        name: 'appFolder',
        merge: true,
        regex: xds.Resource.get('validPath').regex,
        regexText: xds.Resource.get('validPath').regexText,
        isHidden: function() {
            // if build tools are enabled we won't allow the user to change the appFolder
            return this.owner.hideAppFolderCfg();
        }
    },{
        name: 'appProperty',
        merge: false,
        type: 'string',
        defaultValue: 'app'
    },{
        name: 'controllers',
        merge: false,
        type: 'typedarray',
        memberConfig: {
            type: 'controller'
        }
    },{
        name: 'favIconUrl',
        displayName: 'favIcon - url',
        group: xds.architectGroup,
        type: 'string'
    },{
        name: 'favIconMime',
        displayName: 'favIcon - mime-type',
        group: xds.architectGroup,
        type: 'string'
    },{
        name: 'launch',
        type: 'function'
    },{
        name: 'profiles',
        merge: false,
        type: 'typedarray'
    },{
        name: 'loader',
        displayName: 'Loader Config',
        type: 'refgroup',
        max: 1,
        refSelector: 'loader',
        createTypes: ['loader']
    },{
        name: 'name',
        merge: true,
        required: true,
        regex: xds.Resource.get('validFunction').regex,
        regexText: xds.Resource.get('validFunction').regexText
    },{
        name: 'viewport',
        merge:false,
        displayName: 'Viewport Config',
        type: 'refgroup',
        bindable: true,
        max: 1,
        refSelector: 'viewport',
        createTypes: ['viewport']
    },{
        name: 'requires',
        type: 'typedarray',
        group: xds.architectGroup,
        visibleOnlyAsTop: true,
        memberConfig: {
            type: 'string',
            displayName: 'requires', // added for validateConfigValue to display proper name
            regex: xds.Resource.get('validRequiresName').regex,
            regexText: xds.Resource.get('validRequiresName').regexText
        },
        applyToClassConfig: true
    },{
        name: 'title',
        group: xds.architectGroup,
        type: 'string'
    },{
        name: 'themeVariation',
        type: 'string',
        regex: xds.Resource.get('validCls').regex,
        regexText: xds.Resource.get('validCls').regexText,
        alternates: [{
            type: 'function'
        }]
    }],


    init: function() {
        var me = this;
        me.on({
            codeconfig: me.onCodeConfig,
            canvasrenderready: me.onCanvasRenderReady,
            cfgchange: me.onCfgChange,
            scope: me
        });
    },

    onCodeConfig: function(config) {
        // Hoist the 'loader' ref up onto the root of the config object, so that the template can
        // target it directly and it won't show up in the Ext.application() config with other refs.
        var refs = config.refs,
            Registry = xds.component.Registry,
            loaderRef, i, dummyInstance;
        if (refs) {
            for (i = refs.length; i--;) {
                if (refs[i].name === 'loader') {
                    loaderRef = refs[i].value;
                    refs.splice(i, 1);
                    break;
                }
            }
        }
        if (!loaderRef) {
            // Fall back to a default of enabled:true
            dummyInstance = Registry.create({
                type: 'loader',
                userConfig: {
                    enabled: true
                }
            });
            loaderRef = dummyInstance.getCodeConfig();
        }
        config.loader = loaderRef;

        // Borrow the theme name from the library node
        config.themeName = xds.component.themeVar.Manager.getActiveThemeNameForFrameworkConfig();

        return config;
    },

    updateThemeVariationInCanvas: function() {
        var prefix = this.getCfgValueOrDefault('themeVariationPrefix');
        var themeVariation = this.getCfgValueOrDefault('themeVariation');

        if (typeof themeVariation !== 'string') {
            //we don't support functions etc. in canvas
            themeVariation = false;
        }

        if (themeVariation) {
            themeVariation = prefix + themeVariation;
            xds.canvas.messaging.call('setThemeVariationCls', themeVariation);
        } else {
            xds.canvas.messaging.call('setThemeVariationCls', false);
        }
    },

    onCanvasRenderReady: function(){
        this.updateThemeVariationInCanvas();
    },

    onCfgChange: function(cfgName, newValue, oldValue){
        if (cfgName === 'themeVariationPrefix' || cfgName === 'themeVariation') {
            this.updateThemeVariationInCanvas();
        }
    }
});
