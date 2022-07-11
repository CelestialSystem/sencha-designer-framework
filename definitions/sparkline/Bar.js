xds.component.Registry.addDefinition({
    override: "Ext.sparkline.Bar",
    typeAlias: 'sparklinebar',

    toolbox: {
        name: 'Bar Sparkline',
        iconCls: 'icon-sparkline-bar', // TODO: needs icon
        category: 'Standard',
        groups: ['Charts']
    },
    autoName: 'MyBarSparkline'
});