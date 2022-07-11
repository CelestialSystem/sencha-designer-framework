xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.Abstract",

    mixin: ['baseview'],
    transformGroup: 'chartinteractions',

    validParentTypes: [
        'Ext.chart.AbstractChart'
    ],

    disablePromoteToClass:true,

    ignoreCfgs: [
        'chart' //not user-settable
    ],

    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);

        // Interactions are added in the chart's `interactions` config
        me.setReference({ name: 'interactions', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.type = this.getAlias().replace(/^interaction\./, '');
        return config;
    },

    onCodeConfig: function(config) {
        var type = this.getAlias().replace(/^interaction\./, '');
        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: type,
            rawValue: type
        });
        return config;
    }

});
