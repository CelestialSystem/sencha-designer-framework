xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Discrete",
    "className": "Ext.sparkline.Discrete",
    "classAlias": "widget.sparklinediscrete",
    "inherits": "Ext.sparkline.BarBase",
    "autoName": "MyDiscrete",
    "cfgs": [
        {
            "name": "chartRangeClip",
            "type": "boolean",
            "defaultValue": false,
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
            "name": "lineHeight",
            "type": "number",
            "defaultValue": "auto",
            "bindable": true
        },
        {
            "name": "thresholdColor",
            "type": "string",
            "bindable": true
        },
        {
            "name": "thresholdValue",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
