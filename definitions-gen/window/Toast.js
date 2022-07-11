xds.component.Registry.addDefinition({
    "type": "Ext.window.Toast",
    "className": "Ext.window.Toast",
    "classAlias": "widget.toast",
    "inherits": "Ext.window.Window",
    "autoName": "MyToast",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "editor": "options",
            "options": [
                "b",
                "bl",
                "br",
                "l",
                "r",
                "t",
                "tl",
                "tr"
            ],
            "defaultValue": "t"
        },
        {
            "name": "alwaysOnTop",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "anchor",
            "type": "string"
        },
        {
            "name": "anchorAlign",
            "type": "string"
        },
        {
            "name": "animate",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoClose",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoCloseDelay",
            "type": "number",
            "defaultValue": 3000
        },
        {
            "name": "bodyPadding",
            "type": "auto",
            "defaultValue": 10
        },
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "closeOnMouseDown",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-toast"
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "hideDuration",
            "type": "number",
            "defaultValue": 500
        },
        {
            "name": "minHeight",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "plain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "resizable",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "shadow",
            "type": "string",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "slideBackAnimation",
            "type": "string",
            "defaultValue": "bounceOut"
        },
        {
            "name": "slideBackDuration",
            "type": "number",
            "defaultValue": 500
        },
        {
            "name": "slideInAnimation",
            "type": "string",
            "defaultValue": "easeIn"
        },
        {
            "name": "slideInDuration",
            "type": "number",
            "defaultValue": 500
        },
        {
            "name": "spacing",
            "type": "number",
            "defaultValue": 6
        },
        {
            "name": "stickOnClick",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stickWhileHover",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "useXAxis",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
