xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Base",
    "className": "Ext.sparkline.Base",
    "classAlias": "widget.sparkline",
    "inherits": "Ext.Widget",
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "disableTooltips",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "highlightColor",
            "type": "string",
            "bindable": true
        },
        {
            "name": "highlightLighten",
            "type": "number",
            "defaultValue": 0.1,
            "bindable": true
        },
        {
            "name": "lineColor",
            "type": "string",
            "defaultValue": "#157fcc",
            "bindable": true
        },
        {
            "name": "tipTpl",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "tooltipPrefix",
            "type": "string",
            "bindable": true
        },
        {
            "name": "tooltipSkipNull",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "tooltipSuffix",
            "type": "string",
            "bindable": true
        },
        {
            "name": "values",
            "type": "array",
            "bindable": true
        }
    ]
});
