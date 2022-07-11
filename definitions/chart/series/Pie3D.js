xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Pie3D",

    toolbox: {
        name: '3D Pie Series',
        iconCls: 'icon-series-pie3d',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyPie3DSeries",

    cfgs: [
        {
            name: "donut",
            merge: true,
            type: 'boolean',
            alternates: [{
                type: 'number'
            }]
        },
        {
            name: "angleField",
            merge: true,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ]
});
