xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Line",
    typeAlias: 'lineseries',

    toolbox: {
        name: 'Line Series',
        iconCls: 'icon-series-line',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyLineSeries',

    validParentTypes: ['cartesian'],

    ignoreCfgs: [
        'type'
    ],

    init: function() {
        this.ex('setup', this.onSetup, this);
    },

    onSetup: function() {
        var config = {
                axis: 'left',
                xField: 'x',
                yField: [
                    'y'
                ],
                smooth: 3
            };

        this.setCfgValue(config);
    }
});
