xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Box",
    typeAlias: 'sparklinebox',

    toolbox: {
        name: 'Box Sparkline',
        iconCls: 'icon-sparkline-box',
        category: 'Standard',
        groups: ['Charts']
    },
    autoName: 'MyBoxSparkline'
});