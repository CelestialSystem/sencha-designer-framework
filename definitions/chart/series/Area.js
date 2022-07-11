xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Area",

    toolbox: {
        name: 'Area Series',
        iconCls: 'icon-series-area',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyAreaSeries"
});
