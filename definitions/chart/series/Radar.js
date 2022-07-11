xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Radar",
    typeAlias: 'radarseries',

    toolbox: {
        name: 'Radar Series',
        iconCls: 'icon-series-radar',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyRadarSeries',

    validParentTypes: ['polar']
});
