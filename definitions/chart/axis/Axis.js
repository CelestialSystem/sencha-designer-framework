xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Axis",

    mixin: ['baseview'],

    validParentTypes: ['abstractchart'],
    validChildTypes: [],
    disableInitialView: true,
    transformGroup: 'chartaxes',
    disablePromoteToClass: true,
    typeAlias: 'axis',

    ignoreCfgs: [
        'chart' //not user-settable
    ],

    cfgs: [
        {
            name: "fields",
            merge: false,
            type: 'typedarray',
            memberConfig: {
                type: 'datafield',
                storeOwnerSelector: '^abstractchart'
            }
        },
        {
            name: "position",
            merge: true,
            editor: 'options',
            options: ['left', 'bottom', 'right', 'top', 'radial', 'angular']
        }
    ],


    init: function() {
        var me = this;

        me.on('canvasconfig', me.onCanvasConfig, me);
        me.on('codeconfig', me.onCodeConfig, me);

        // Axes are added in the chart's `axes` config
        me.setReference({ name: 'axes', type: 'array' });
    },

    onCanvasConfig: function(config) {
        config.type = this.getAlias().replace(/^axis\./, '');
        return config;
    },

    onCodeConfig: function(config) {
        var type = this.getAlias().replace(/^axis\./, '');
        config.configs.unshift({
            name: 'type',
            type: 'string',
            value: type,
            rawValue: type
        });
        return config;
    }
});
