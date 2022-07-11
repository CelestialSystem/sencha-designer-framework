xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Pie",
    "className": "Ext.chart.series.Pie",
    "classAlias": "series.pie",
    "inherits": "Ext.chart.series.Polar",
    "autoName": "MyPie",
    "cfgs": [
        {
            "name": "clockwise",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "donut",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "highlightCfg",
            "type": "object",
            "defaultValue": {
                "margin": 20
            },
            "bindable": true
        },
        {
            "name": "radiusFactor",
            "type": "number",
            "defaultValue": 100,
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
            "name": "totalAngle",
            "type": "number",
            "defaultValue": 6.283185307179586,
            "bindable": true
        }
    ]
});
