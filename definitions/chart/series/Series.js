xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Series",
    typeAlias: 'chartseries',
    mixin: ['baseview'],

    validParentTypes: ['cartesian'],
    validChildTypes: [],
    disableInitialView: true,

    ignoreCfgs: [
        'listeners',
        'type'
    ],

    cfgs: [{
        name: 'renderer',
        merge: true,
        params: [
            {
                "name": "sprite",
                "type": "Object"
            },
            {
                "name": "config",
                "type": "Object"
            },
            {
                "name": "rendererData",
                "type": "Object"
            },
            {
                "name": "index",
                "type": "Number"
            }
        ]
    }],

    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);
        me.on('linkedinstance', me.onLinkedInstance, me);
        me.on('linkedinstancecodeconfig', me.onLinkedInstanceCodeConfig, me);

        // Series are added in the chart's `series` config
        me.setReference({ name: 'series', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.type = this.getSeriesType();

        // Prevent an unparseable 'style' object cfg value from breaking the canvas
        if (!Ext4.isObject(config.style)) {
            delete config.style;
        }

        return config;
    },

    onCodeConfig: function(config) {
        var seriesType = this.getSeriesType();

        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: seriesType,
            rawValue: seriesType
        });

        return config;
    },

    getSeriesType: function() {
        return this.getAlias().replace(/^series\./, '');
    },

    onLinkedInstance: function(linkedInstance) {
        var me = this;

        // Copy our implementation of getSeriesType to the linked instance
        linkedInstance.getSeriesType = me.getSeriesType;
    },

    onLinkedInstanceCodeConfig: function(config, linkedInstance) {
        // Force the linked instance to generate instantiation code
        // rather than an xtype config.
        // i.e.:
        //   { xtype: 'myseries', id: 'yo' }
        //   =>
        //   Ext.create('myseries', { id: 'yo' })
        config.$codeClass = this.getUserClassName();
        delete config.alias;
        return config;
    }
});
