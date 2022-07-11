xds.component.Registry.addDefinition({
    "type": "Ext.chart.axis.sprite.Axis",
    "className": "Ext.chart.axis.sprite.Axis",
    "classAlias": "sprite.axis",
    "inherits": "Ext.draw.sprite.Sprite",
    "mixin": [
        "Ext.chart.MarkerHolder"
    ],
    "autoName": "MyAxis",
    "cfgs": [
        {
            "name": "axis",
            "type": "object",
            "bindable": true
        },
        {
            "name": "axisLine",
            "type": "boolean"
        },
        {
            "name": "baseRotation",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "centerX",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "centerY",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "dataMax",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "dataMin",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "enlargeEstStepSizeByText",
            "type": "boolean"
        },
        {
            "name": "grid",
            "type": "boolean"
        },
        {
            "name": "label",
            "type": "object",
            "bindable": true
        },
        {
            "name": "labelOffset",
            "type": "number",
            "defaultValue": 10,
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "bindable": true
        },
        {
            "name": "length",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "majorTicks",
            "type": "boolean"
        },
        {
            "name": "majorTickSize",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "max",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "min",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "minorTicks",
            "type": "boolean"
        },
        {
            "name": "minorTickSize",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "minStepSize",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "position",
            "type": "string",
            "defaultValue": "enums(left,right,top,bottom,angular,radial,gauge)"
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true
        },
        {
            "name": "segmenter",
            "type": "object",
            "bindable": true
        },
        {
            "name": "textPadding",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "visibleMax",
            "type": "number",
            "defaultValue": "number"
        },
        {
            "name": "visibleMin",
            "type": "number",
            "defaultValue": "number"
        }
    ]
});
