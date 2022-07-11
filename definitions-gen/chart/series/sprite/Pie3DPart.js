xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Pie3DPart",
    "className": "Ext.chart.series.sprite.Pie3DPart",
    "classAlias": "sprite.pie3dPart",
    "inherits": "Ext.draw.sprite.Path",
    "mixin": [
        "Ext.chart.MarkerHolder"
    ],
    "autoName": "MyPie3DPart",
    "cfgs": [
        {
            "name": "baseColor",
            "type": "object",
            "defaultValue": "white"
        },
        {
            "name": "baseRotation",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "bevelWidth",
            "type": "number",
            "defaultValue": 5
        },
        {
            "name": "centerX",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "centerY",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "colorSpread",
            "type": "number",
            "defaultValue": 0.7
        },
        {
            "name": "distortion",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "endAngle",
            "type": "number",
            "defaultValue": 3.141592653589793
        },
        {
            "name": "endRho",
            "type": "number",
            "defaultValue": 150
        },
        {
            "name": "label",
            "type": "string"
        },
        {
            "name": "margin",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "part",
            "type": "string",
            "defaultValue": "top"
        },
        {
            "name": "startAngle",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "startRho",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "thickness",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
