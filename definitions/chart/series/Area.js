xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Area",
    typeAlias: 'areaseries',

    toolbox: {
        name: 'Area Series',
        iconCls: 'icon-series-area',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyAreaSeries'
});
