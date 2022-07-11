xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Polar",
    "className": "Ext.chart.series.Polar",
    "inherits": "Ext.chart.series.Series",
    "autoName": "MyPolar",
    "cfgs": [
        {
            "name": "angleField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "center",
            "type": "array",
            "defaultValue": [
                0,
                0
            ],
            "bindable": true
        },
        {
            "name": "offsetX",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "offsetY",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "radiusField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "rotation",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "showInLegend",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
