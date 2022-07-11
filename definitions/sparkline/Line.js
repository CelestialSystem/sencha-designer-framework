xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Line",
    typeAlias: 'sparklineline',

    toolbox: {
        name: 'Line Sparkline',
        iconCls: 'icon-sparkline-line',
        category: 'Standard',
        groups: ['Charts']
    },
    autoName: 'MyLineSparkline'
});