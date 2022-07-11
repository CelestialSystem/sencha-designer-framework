xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Bar",

    toolbox: {
        name: 'Bar Series',
        iconCls: 'icon-series-bar',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyBarSeries"
});
