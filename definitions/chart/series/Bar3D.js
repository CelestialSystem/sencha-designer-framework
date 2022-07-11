xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Bar3D",
    typeAlias: 'bar3d',

    toolbox: {
        name: '3D Bar Series',
        iconCls: 'icon-series-bar',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'My3DBarSeries',

    ignoreCfgs: [
        'column' // just use Column series instead of setting to true
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
