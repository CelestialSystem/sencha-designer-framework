xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Gauge",
    typeAlias: 'gaugeseries',

    toolbox: {
        name: 'Gauge Series',
        iconCls: 'icon-series-gauge',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyGaugeSeries',

    validParentTypes: [
        'Ext.chart.SpaceFillingChart',
        'Ext.chart.PolarChart'
    ],

    ignoreCfgs: [
        'type'
    ],

    cfgs: [{
        name: 'angleField',
        merge: false,
        type: 'datafield',
        storeOwnerSelector: '^abstractchart',
        required: true
    }, {
        name: 'donut',
        merge: false,
        type: 'number',
        alternates: [{
            type: 'boolean'
        }]
    }],

    init: function() {
        var me = this;
        me.on('coderequires', me.onCodeRequires, me);
        me.ex('setup', me.onSetup, me);
    },

    onSetup: function() {
        var config = {
                angleField: 'y'
            };

        this.setCfgValue(config);
    },

    onCodeRequires: function() {
        // required so builds work.
        return ['Ext.chart.series.sprite.PieSlice'];
    }
});
