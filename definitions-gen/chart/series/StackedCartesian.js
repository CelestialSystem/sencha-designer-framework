xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.StackedCartesian",
    "className": "Ext.chart.series.StackedCartesian",
    "inherits": "Ext.chart.series.Cartesian",
    "autoName": "MyStackedCartesian",
    "cfgs": [
        {
            "name": "fullStack",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "fullStackTotal",
            "type": "boolean",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "splitStacks",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "stacked",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
