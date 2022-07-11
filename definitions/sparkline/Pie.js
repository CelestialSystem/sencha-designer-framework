xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Pie",
    typeAlias: 'sparklinepie',

    toolbox: {
        name: 'Pie Sparkline',
        iconCls: 'icon-sparkline-pie',
        category: 'Standard',
        groups: ['Charts']
    },
    autoName: 'MyPieSparkline'
});