xds.component.Registry.addDefinition({
    override: "Ext.dataview.NestedList",
    typeAlias: "nestedlist",

    "toolbox": {
        "name": "Nested List",
        "iconCls": "icon-nestedlist",
        "category": "Views",
        "groups": ["Views"]
    },

    // Don't allow arbitrary children
    "validChildTypes": ["toolbar", "titlebar"],
    "singleChildTypes": ["toolbar,titlebar"], //toolbar and titlebar treated as a single type group

    toolbarDefaultConfig: {
        xtype: 'titlebar',
        docked: 'top',
        ui: 'light',
        inline: true
    },

    ignoreCfgs: [
        "tpl",
        "defaultType",
        "activeItem"
    ],
    obscureCfgs: [],
    cfgs: [{
        name: "detailCard",
        merge: true,
        type: "view"
    }, {
        name: "displayField",
        merge: true,
        type: "datafield"
    }, {
        name: 'layout',
        merge: false,
        type: 'string',
        defaultValue: 'card',
        hidden: true,
        canSetValue: false
    }, {
        name: "store",
        merge: false,
        type: "store",
        noneStore: '(tree-none)',
        storeSelector: 'treestore'
    }, {
        name: 'toolbar',
        merge: false,
        displayName: 'Toolbar',
        type: 'refgroup',
        refSelector: 'toolbar,titlebar',
        createTypes: ['toolbar', 'titlebar'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on({
            addchild: me.onAddChild,
            codeconfig: me.onCodeConfig,
            linkedinstancecodeconfig: me.onLinkedInstanceCodeConfig,
            canvasconfig: me.onCanvasConfig,
            beforeshowcfgoptions: me.onBeforeShowCfgOptions,
            scope: me
        });
    },

    onAddChild: function(child) {
        if (child.isType('toolbar') || child.isType('titlebar')) {
            child.setReference('toolbar');
            child.setCfgDefaultValue(this.toolbarDefaultConfig);
            child.disableDuplication = true;
            child.on('beforecfgchange', this.onBeforeToolbarCfgChange, this);
        }
    },

    onBeforeToolbarCfgChange: function(name, value) {
        // Hoist toolbar title up to the NestedList's `title` config
        if (name === 'title') {
            this.setCfgValue(name, value);
            return false;
        }
        return true;
    },

    onCodeConfig: function(codeConfig) {
        // Remove toolbar ref if it does not have any modified values or refs
        var toolbarDefaults = this.toolbarDefaultConfig;

        if (codeConfig.refs) {
            codeConfig.refs = codeConfig.refs.filter(function(ref) {
                if (ref.name === 'toolbar') {
                    var refs = ref.value.refs,
                        tb;
                    // because of linked instances there could be a state in which 2 toolbars are present in which case we'll only test the first one
                    // in reality this should not be allowed and we're preventing an error in an extreme edge case
                    if (Ext4.isArray(ref.value)) {
                        tb = ref.value[0];
                    } else {
                        tb = ref.value;
                    }

                    return (refs && refs.length > 0) || tb.configs.some(function(config) {
                        return config.rawValue !== toolbarDefaults[config.name];
                    });
                }
                return true;
            });
        }

        this.adjustDetailCardCodeConfig(codeConfig);

        return codeConfig;
    },

    onLinkedInstanceCodeConfig: function(codeConfig, linkedInstance) {
        this.adjustDetailCardCodeConfig(codeConfig);
        return codeConfig;
    },

    adjustDetailCardCodeConfig: function(codeConfig) {
        // detailCard is expected to be a config with xtype. Convert view from string to object config with xtype/xclass
        var me = this,
            className, alias, viewInst;
        codeConfig.configs.each(function(config) {
            if (config.name == 'detailCard') {
                viewInst = xds.app.manager.View.getInstanceByConfig('designer|userClassName', config.value);
                if (viewInst) {
                    className = viewInst.getQualifiedClassName();
                    alias = viewInst.getUserAlias();

                    config.value = config.rawValue = alias ? '{xtype: "' + alias + '"}' : '{xclass: "' + className + '"}';
                    config.type = 'object';
                } else {
                    // User is entering a non xds class
                    className = (config.value.indexOf(xds.project.getAppName() + '.') != -1) ? config.value :
                        xds.project.getAppName() + me.getNamespace() + '.' + config.value;

                    config.value = config.rawValue = '{xclass: "' + className + '"}' ;
                    config.type = 'object';
                }
            }
        });
    },

    onCanvasConfig: function(config) {
        // If the associated store is not yet properly configured for load, remove it
        // from the config so it doesn't throw errors when the component triggers a load.
        var store = this.flyCfg('store').getValueInstance();
        if (store && !store.isLoadReady()) {
            delete config.store;
        }
        // detailCard is expected to be a config with xtype. delete it so it doesnt fail
        if (config.detailCard) {
            delete config.detailCard;
        }
        return config;
    },

    onBeforeShowCfgOptions: function(configName, options) {
        if (configName === 'detailCard') {
            var className = this.getUserClassName();

            // Remove me from the view list
            Ext4.Array.replace(options, 0, options.length, options.filter(function(option) {
                return option[0] != className;
            }));
        }
    }
});
