xds.component.Registry.addDefinition({
    override: "Ext.chart.interactions.PanZoom",

    toolbox: {
        name: 'Pan Zoom Interaction',
        iconCls: 'icon-interaction-panzoom',
        category: 'Chart Interactions',
        groups: ['Charts']
    },
    autoName: "MyPanZoomInteraction"
});
