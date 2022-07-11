xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.Rotate",
    typeAlias: 'rotateinteraction',

    toolbox: {
        name: 'Rotate Interaction',
        iconCls: 'icon-interaction-rotate',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyRotateInteraction"
});
