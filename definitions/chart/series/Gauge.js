xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Gauge",

    toolbox: {
        name: 'Gauge Series',
        iconCls: 'icon-series-gauge',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyGaugeSeries",
    validParentTypes: ['Ext.chart.SpaceFillingChart'],

    cfgs: [
        {
            name: "donut",
            merge: true,
            alternates: [{
                type: 'boolean'
            }]
        },
        {
            name: 'angleField',
            merge: true,
            type: 'datafield',
            storeOwnerSelector: '^abstractchart'
        }
    ]
});
