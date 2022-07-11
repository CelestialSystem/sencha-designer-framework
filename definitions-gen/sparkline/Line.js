xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Line",
    "className": "Ext.sparkline.Line",
    "classAlias": "widget.sparklineline",
    "inherits": "Ext.sparkline.Base",
    "autoName": "MyLine",
    "cfgs": [
        {
            "name": "chartRangeMax",
            "type": "number",
            "bindable": true
        },
        {
            "name": "chartRangeMaxX",
            "type": "number",
            "bindable": true
        },
        {
            "name": "chartRangeMin",
            "type": "number",
            "bindable": true
        },
        {
            "name": "chartRangeMinX",
            "type": "number",
            "bindable": true
        },
        {
            "name": "drawNormalOnTop",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "fillColor",
            "type": "string",
            "defaultValue": "#def",
            "bindable": true
        },
        {
            "name": "highlightLineColor",
            "type": "string",
            "defaultValue": "#f22",
            "bindable": true
        },
        {
            "name": "highlightSpotColor",
            "type": "string",
            "defaultValue": "#5f5",
            "bindable": true
        },
        {
            "name": "lineWidth",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "maxSpotColor",
            "type": "string",
            "defaultValue": "#f80",
            "bindable": true
        },
        {
            "name": "minSpotColor",
            "type": "string",
            "defaultValue": "#f80",
            "bindable": true
        },
        {
            "name": "normalRangeColor",
            "type": "string",
            "defaultValue": "#ccc",
            "bindable": true
        },
        {
            "name": "normalRangeMax",
            "type": "number",
            "bindable": true
        },
        {
            "name": "normalRangeMin",
            "type": "number",
            "bindable": true
        },
        {
            "name": "spotColor",
            "type": "string",
            "defaultValue": "#f80",
            "bindable": true
        },
        {
            "name": "spotRadius",
            "type": "number",
            "defaultValue": 1.5,
            "bindable": true
        },
        {
            "name": "valueSpots",
            "type": "object",
            "bindable": true
        }
    ]
});
