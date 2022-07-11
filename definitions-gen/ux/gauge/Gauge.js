xds.component.Registry.addDefinition({
    "type": "Ext.ux.gauge.Gauge",
    "className": "Ext.ux.gauge.Gauge",
    "classAlias": "widget.gauge",
    "inherits": "Ext.Widget",
    "autoName": "MyGauge",
    "typeAlias": [
        "Ext.ux.Gauge"
    ],
    "cfgs": [
        {
            "name": "angleOffset",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "animation",
            "type": "object",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "clockwise",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "maxValue",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "minValue",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "needle",
            "type": "object",
            "bindable": true
        },
        {
            "name": "padding",
            "type": "auto",
            "defaultValue": 10,
            "bindable": true
        },
        {
            "name": "textAlign",
            "type": "string",
            "defaultValue": "c-c",
            "bindable": true
        },
        {
            "name": "textOffset",
            "type": "object",
            "defaultValue": {
                "dx": 0,
                "dy": 0
            },
            "bindable": true
        },
        {
            "name": "textTpl",
            "type": "template",
            "defaultValue": [
                "<tpl>{value:number(\"0.00\")}%</tpl>"
            ],
            "bindable": true
        },
        {
            "name": "trackLength",
            "type": "number",
            "defaultValue": 270,
            "bindable": true
        },
        {
            "name": "trackStart",
            "type": "number",
            "defaultValue": 135,
            "bindable": true
        },
        {
            "name": "trackStyle",
            "type": "object",
            "defaultValue": {
                "outerRadius": "100%",
                "innerRadius": "100% - 20",
                "round": false
            },
            "bindable": true
        },
        {
            "name": "value",
            "type": "number",
            "defaultValue": 50,
            "bindable": true
        },
        {
            "name": "valueStyle",
            "type": "object",
            "defaultValue": {
                "outerRadius": "100% - 2",
                "innerRadius": "100% - 18",
                "round": false
            },
            "bindable": true
        }
    ]
});
