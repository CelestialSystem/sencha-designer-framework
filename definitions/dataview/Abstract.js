xds.component.Registry.addDefinition({
    override: 'Ext.dataview.Abstract',

    cfgs: [{
        name: 'data',
        merge: true,
        mock: false
    }, {
        name: 'scrollable',
        merge: true,
        type: 'auto',
        allowBoolean: true,
        editor: 'options',
        options: [
            ['false', false],
            ['true', true],
            ['horizontal', 'horizontal'],
            ['vertical', 'vertical'],
            ['both', 'both']
        ]
    }, {
        name: 'store',
        merge: false,
        type: 'store',
        alternates: [{
            type: 'object'
        }]
    }],

    obscureCfgs: ['!defaultType', 'pressedCls', 'selectedCls'],
    ignoreCfgs: [
        "tpl",
        "tplWriteMode"
    ],

    ignoreEvents: ['add', 'move', 'remove'],

    init: function() {
        var me = this;
        me.on({
            canvasconfig: me.onCanvasConfig,
            validate: me.onValidate,
            scope: me
        });
        me.ex('setup', me.onSetup, me);
    },

    getDefaultItemTpl: function() {
        return '<div>Data View Item {string}</div>';
    },

    onSetup: function() {
        var me = this,
            config;

        // Set a default itemTpl
        if (!me.isCfgSet('itemTpl')) {
            config = me.flyCfg('itemTpl');
            config.setTemplateValue(me.getDefaultItemTpl());
        }
    },

    onCanvasConfig: function(config) {
        // If data and store are both set, only allow one through so they don't conflict.
        // We give preference to the data config since the store might be the (none) store.
        if (config.store && config.data) {
            delete config.store;
        }
        return config;
    },

    onValidate: function() {
        // Warn when both store and data configs are set
        if (this.isCfgSet('store') && this.isCfgSet('data')) {
            return [xds.Resource.get('dataview').storePlusData];
        }
    }
});