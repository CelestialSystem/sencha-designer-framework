xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.Crosshair",

    toolbox: {
        name: 'Crosshair Interaction',
        iconCls: 'icon-interaction-crosshair',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyCrosshairInteraction"
});
