xds.component.Registry.addDefinition({
    override: "Ext.chart.series.BoxPlot",

    toolbox: {
        name: 'BoxPlot Series',
        iconCls: 'icon-series-candlestick',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyBoxPlotSeries"
});
