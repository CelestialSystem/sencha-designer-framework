xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.ItemInfo",
    typeAlias: 'iteminfointeraction',

    toolbox: {
        name: 'Item Info Interaction',
        iconCls: 'icon-interaction-iteminfo',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyItemInfoInteraction"
});
