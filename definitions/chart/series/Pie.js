xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Pie",

    toolbox: {
        name: 'Pie Series',
        iconCls: 'icon-series-pie',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyPieSeries",

    cfgs: [
        {
            name: "radiusField",
            merge: true,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ]
});
