xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.CrossZoom",
    "className": "Ext.chart.interactions.CrossZoom",
    "classAlias": "interaction.crosszoom",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyCrossZoom",
    "cfgs": [
        {
            "name": "axes",
            "type": "object",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
