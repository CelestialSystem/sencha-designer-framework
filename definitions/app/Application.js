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

    validChildTypes: ['controlleraction', 'basicfunction', 'controllerref', 'loader', '!customevent'],
    singleChildTypes: ['loader'],

    reservedCfgs: ['controllers', 'refs'],

    ignoreCfgs: [
        'alternateClassName',
        'autoCreateViewport',
        'control',
        'designer|userClassName',
        'designer|userAlias',
        'init',
        'mixins',
        'onLaunch',
        'paths', // omitted in favor of setting it on the loader config
        'singleton',
        'staticsRefGroup',
        'refs'
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
        regex: xds.Resource.get('validApplicationName').regex,
        regexText: xds.Resource.get('validApplicationName').regexText
    },{
        name: 'title',
        group: xds.architectGroup,
        type: 'string'
    },{
        name: "enableQuickTips",
        type: "boolean",
        defaultValue: true
    }],


    // lots of behavior is shared across the ext frameworks and can be found in extcommon/app/ApplicationBehavior
    init: function() {
        var me = this;
        me.on({
            codeconfig: me.onCodeConfig,
            scope: me
        });
    },

    onCodeConfig: function(config) {
        // Hoist the 'loader' ref up onto the root of the config object, so that the template can
        // target it directly and it won't show up in the Ext.application() config with other refs.
        var refs = config.refs,
            methods = config.methods || (config.methods = []),
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
            dummyInstance = xds.component.Registry.create({
                type: 'loader',
                userConfig: {
                    enabled: true
                }
            });
            loaderRef = dummyInstance.getCodeConfig();
        }
        config.loader = loaderRef;

        // If any components are using RTL, require the Ext.rtl.* classes
        if (xds.project.usesRtl()) {
            this.addRequiresToCodeConfig(config, 'Ext.rtl.*');
        }

        return config;
    }
});
