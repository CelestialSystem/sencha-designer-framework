xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Bar",
    typeAlias: 'barseries',

    toolbox: {
        name: 'Bar Series',
        iconCls: 'icon-series-bar',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyBarSeries',

    ignoreCfgs: [
        'column' // just use Column series instead of setting to trud
    ],

    init: function() {
        this.ex('setup', this.onSetup, this);
    },

    onSetup: function() {
        var config = {
                label: "{'display':'insideEnd','field':'y','color':'#333','text-anchor':'middle'}",
                axis: 'bottom',
                xField: 'x',
                yField: [
                    'y'
                ]
            };

        this.setCfgValue(config);
    }
});
