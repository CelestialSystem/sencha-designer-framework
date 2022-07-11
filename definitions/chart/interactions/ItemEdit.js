xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.ItemEdit",

    toolbox: {
        name: 'Item Edit Interaction',
        iconCls: 'icon-interaction-itemedit',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyItemEditInteraction"
});
