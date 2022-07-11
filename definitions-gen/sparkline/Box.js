xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Box",
    "className": "Ext.sparkline.Box",
    "classAlias": "widget.sparklinebox",
    "inherits": "Ext.sparkline.Base",
    "autoName": "MyBox",
    "cfgs": [
        {
            "name": "boxFillColor",
            "type": "string",
            "defaultValue": "#cdf",
            "bindable": true
        },
        {
            "name": "boxLineColor",
            "type": "string",
            "defaultValue": "#000",
            "bindable": true
        },
        {
            "name": "chartRangeMax",
            "type": "number",
            "bindable": true
        },
        {
            "name": "chartRangeMin",
            "type": "number",
            "bindable": true
        },
        {
            "name": "medianColor",
            "type": "string",
            "defaultValue": "#f00",
            "bindable": true
        },
        {
            "name": "outlierFillColor",
            "type": "string",
            "defaultValue": "#fff",
            "bindable": true
        },
        {
            "name": "outlierIQR",
            "type": "number",
            "defaultValue": 1.5,
            "bindable": true
        },
        {
            "name": "outlierLineColor",
            "type": "string",
            "defaultValue": "#333",
            "bindable": true
        },
        {
            "name": "raw",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "showOutliers",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "spotRadius",
            "type": "number",
            "defaultValue": 1.5,
            "bindable": true
        },
        {
            "name": "target",
            "type": "number",
            "bindable": true
        },
        {
            "name": "targetColor",
            "type": "string",
            "defaultValue": "#4a2",
            "bindable": true
        },
        {
            "name": "whiskerColor",
            "type": "string",
            "defaultValue": "#000",
            "bindable": true
        }
    ]
});
