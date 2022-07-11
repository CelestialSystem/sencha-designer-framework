xds.component.Registry.addDefinition({
    "type": "Ext.chart.legend.SpriteLegend",
    "className": "Ext.chart.legend.SpriteLegend",
    "classAlias": "legend.sprite",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MySpriteLegend",
    "cfgs": [
        {
            "name": "background",
            "type": "object",
            "bindable": true
        },
        {
            "name": "border",
            "type": "object",
            "defaultValue": {
                "type": "legendborder"
            },
            "bindable": true
        },
        {
            "name": "chart",
            "type": "object",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "marker",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "padding",
            "type": "number",
            "defaultValue": 10,
            "bindable": true
        },
        {
            "name": "size",
            "type": "object",
            "defaultValue": {
                "width": 0,
                "height": 0
            },
            "bindable": true
        },
        {
            "name": "surface",
            "type": "object",
            "bindable": true
        },
        {
            "name": "toggleable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
