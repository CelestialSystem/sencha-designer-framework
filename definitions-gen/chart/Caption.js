xds.component.Registry.addDefinition({
    "type": "Ext.chart.Caption",
    "className": "Ext.chart.Caption",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Bindable"
    ],
    "autoName": "MyCaption",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "alignTo",
            "type": "string",
            "editor": "options",
            "options": [
                "chart",
                "series"
            ],
            "defaultValue": "series",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "top"
            ],
            "defaultValue": "top",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "padding",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "defaultValue": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Verdana, Aria, sans-serif"
            },
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "weight",
            "type": "object",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
