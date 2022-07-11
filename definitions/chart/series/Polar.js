xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Polar",

    validParentTypes: ['Ext.chart.PolarChart'],

    cfgs: [
        {
            name: "angleField",
            merge: true,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        },
        {
            name: "radiusField",
            merge: true,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ]
});
