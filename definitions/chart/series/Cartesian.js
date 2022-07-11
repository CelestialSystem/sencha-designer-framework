xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Cartesian",

    validParentTypes: ['Ext.chart.CartesianChart'],

    ignoreCfgs: [
        'xAxis', // not user-settable
        'yAxis' // not user-settable
    ],
    cfgs: [
        {
            name: "xField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        },
        {
            name: "yField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ]
});
