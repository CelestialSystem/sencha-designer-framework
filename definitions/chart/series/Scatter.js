xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Scatter",
    typeAlias: 'scatterseries',

    toolbox: {
        name: 'Scatter Series',
        iconCls: 'icon-series-scatter',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyScatterSeries',

    ignoreCfgs: [
        'type'
    ]
});
