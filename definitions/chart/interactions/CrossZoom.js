xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.CrossZoom",
    typeAlias: 'crosszoominteraction',

    toolbox: {
        name: 'Cross Zoom Interaction',
        iconCls: 'icon-interaction-crosszoom',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyCrossZoomInteraction"
});
