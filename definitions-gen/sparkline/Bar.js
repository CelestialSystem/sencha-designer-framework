xds.component.Registry.addDefinition({
    "type": "Ext.sparkline.Bar",
    "className": "Ext.sparkline.Bar",
    "classAlias": "widget.sparklinebar",
    "inherits": "Ext.sparkline.BarBase",
    "autoName": "MyBar",
    "cfgs": [
        {
            "name": "barColor",
            "type": "string",
            "defaultValue": "#3366cc",
            "bindable": true
        },
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
            "name": "colorMap",
            "type": "object",
            "bindable": true
        },
        {
            "name": "negBarColor",
            "type": "string",
            "defaultValue": "#f44",
            "bindable": true
        },
        {
            "name": "nullColor",
            "type": "string",
            "bindable": true
        },
        {
            "name": "stackedBarColor",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "#3366cc",
                "#dc3912",
                "#ff9900",
                "#109618",
                "#66aa00",
                "#dd4477",
                "#0099c6",
                "#990099"
            ],
            "bindable": true
        },
        {
            "name": "tipTpl",
            "type": "template",
            "defaultValue": "&#9679; {prefix}{value}{suffix}",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "zeroAxis",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "zeroColor",
            "type": "string",
            "bindable": true
        }
    ]
});
