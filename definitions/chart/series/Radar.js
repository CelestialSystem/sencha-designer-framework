xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Radar",

    toolbox: {
        name: 'Radar Series',
        iconCls: 'icon-series-radar',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyRadarSeries"
});
