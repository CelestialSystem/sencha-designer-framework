xds.component.Registry.addDefinition({
    "type": "Ext.chart.legend.LegendBase",
    "className": "Ext.chart.legend.LegendBase",
    "inherits": "Ext.view.View",
    "autoName": "MyLegendBase",
    "cfgs": [
        {
            "name": "dock",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "docked",
            "type": "string",
            "defaultValue": "bottom",
            "bindable": true
        }
    ]
});
