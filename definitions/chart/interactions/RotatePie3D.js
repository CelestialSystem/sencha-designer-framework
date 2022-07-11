xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.RotatePie3D",

    toolbox: {
        name: 'Rotate Pie 3D Interaction',
        iconCls: 'icon-interaction-rotatepie3d',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyRotatePie3DInteraction"
});
