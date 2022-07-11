xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Area",
    "className": "Ext.chart.series.Area",
    "classAlias": "series.area",
    "inherits": "Ext.chart.series.StackedCartesian",
    "autoName": "MyArea",
    "cfgs": [
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "sprite",
                    "type": "Object"
                },
                {
                    "name": "config",
                    "type": "Object"
                },
                {
                    "name": "rendererData",
                    "type": "Object"
                },
                {
                    "name": "index",
                    "type": "Number"
                }
            ]
        },
        {
            "name": "splitStacks",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
