xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Discrete",
    typeAlias: 'sparklinediscrete',

    toolbox: {
        name: 'Discrete Sparkline',
        iconCls: 'icon-sparkline-discrete',
        category: 'Standard',
        groups: ['Charts']
    },
    autoName: 'MyDiscreteSparkline'
});