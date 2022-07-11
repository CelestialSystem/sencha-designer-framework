xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Series",

    mixin: ['baseview'],

    validParentTypes: ['abstractchart'],
    validChildTypes: ['!basiceventbinding'],
    disableInitialView: true,
    transformGroup: 'chartseries',
    disablePromoteToClass:true,

    ignoreCfgs: [
        'eventsRefGroup',
        'store', // set automatically by chart
        'surface'
    ],
    cfgs: [
        {
            name: "renderer",
            merge: true,
            params: [{
                name: 'sprite',
                type: 'Object'
            }, {
                name: 'config',
                type: 'Object'
            }, {
                name: 'rendererData',
                type: 'Object'
            }, {
                name: 'index',
                type: 'Number'
            }]
        }
    ],


    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);

        // Series are added in the chart's `series` config
        me.setReference({ name: 'series', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.type = this.getAlias().replace(/^series\./, '');

        // Prevent an unparseable 'style' object cfg value from breaking the canvas
        if (!Ext4.isObject(config.style)) {
            delete config.style;
        }

        return config;
    },

    onCodeConfig: function(config) {
        var type = this.getAlias().replace(/^series\./, '');
        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: type,
            rawValue: type
        });
        return config;
    }

});
