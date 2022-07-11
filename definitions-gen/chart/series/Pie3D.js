xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Pie3D",
    "className": "Ext.chart.series.Pie3D",
    "classAlias": "series.pie3d",
    "inherits": "Ext.chart.series.Polar",
    "autoName": "MyPie3D",
    "cfgs": [
        {
            "name": "angleField",
            "type": "string",
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
            "name": "rotation",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
