xds.component.Registry.addDefinition({
    override: "Ext.view.Table",
    typeAlias: ['gridview','tableview'],

    classAlias: null, //prevent xtype in config
    validParentTypes: ['gridpanel'],
    validChildTypes: ['griddragdropplugin'],
    singleChildTypes: ['griddragdropplugin'],

    disableDuplication: true,
    disablePromoteToClass: true,

    basicCfgs: ['stripeRows', 'getRowClass'],
    ignoreCfgs: [
        'multiSelect',
        'store',
        'componentLayout',
        'hidden' //no reason for it, and throws framework error
    ],

    // xtype on views is not supported, it must be hoisted to the grid and set as viewType
    // (which is a protected cfg)
    // also we could support the view reference (which overrides viewConfig)
    ignoreCreateCfgs: true,

    cfgs: [{
        name: 'getRowClass',
        type: 'function',
        params: [
            {
                "name": "record",
                "type": "Ext.data.Model"
            },
            {
                "name": "rowIndex",
                "type": "Number"
            },
            {
                "name": "rowParams",
                "type": "Object"
            },
            {
                "name": "store",
                "type": "Ext.data.Store"
            }
        ],
        injectInCanvas: true
    }, {
        name: 'plugins',
        displayName: 'Drag Drop Plugin',
        type: 'refgroup',
        refSelector: 'griddragdropplugin',
        createTypes: ['griddragdropplugin'],
        max: 1
    }],

    init: function() {
        var me = this;

        me.ex('setup', me.onSetup, me);
        me.on({
            codeconfig: me.onCodeConfig,
            scope: me
        });
        me.setReference('viewConfig');
    },

    onSetup: function() {
        var me = this;

        if (!me.parent()) {
            me.setCfgValue({
                width: 400,
                height: 250
            });
        }
    },

    onCodeConfig: function(config) {
        if (config.configs.length === 0 && !config.bindRef && !this.hasChildren()) {
            return false;
        }
        return this.moveChildListenersToMe(config, 'Ext.grid.plugin.DragDrop');
    }
});