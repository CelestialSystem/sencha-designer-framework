xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.TriState",
    "className": "Ext.sparkline.TriState",
    "classAlias": "widget.sparklinetristate",
    "inherits": "Ext.sparkline.BarBase",
    "autoName": "MyTriState",
    "cfgs": [
        {
            "name": "barSpacing",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "barWidth",
            "type": "number",
            "defaultValue": 4,
            "bindable": true
        },
        {
            "name": "colorMap",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "negBarColor",
            "type": "string",
            "defaultValue": "#f44",
            "bindable": true
        },
        {
            "name": "posBarColor",
            "type": "string",
            "defaultValue": "#6f6",
            "bindable": true
        },
        {
            "name": "zeroBarColor",
            "type": "string",
            "defaultValue": "#999",
            "bindable": true
        }
    ]
});
