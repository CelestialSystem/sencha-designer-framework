xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Time",

    toolbox: {
        name: 'Time Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: "MyTimeAxis",

    cfgs: [
        {
            name: "dateFormat",
            merge: true,
            alternates: [{
                type: 'boolean'
            }]
        }
    ]
});
