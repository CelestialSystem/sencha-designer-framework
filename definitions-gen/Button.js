xds.component.Registry.addDefinition({
    "type": "Ext.Button",
    "className": "Ext.Button",
    "classAlias": "widget.button",
    "inherits": "Ext.Component",
    "autoName": "MyButton",
    "cfgs": [
        {
            "name": "allowDepress",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "arrow",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "arrowAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "right"
            ],
            "defaultValue": "right",
            "bindable": true
        },
        {
            "name": "autoEvent",
            "type": "string",
            "bindable": true
        },
        {
            "name": "badgeText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "buttonType",
            "type": "string",
            "defaultValue": "button",
            "bindable": true
        },
        {
            "name": "destroyMenu",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "enableToggle",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "button",
                    "type": "Ext.Button"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ]
        },
        {
            "name": "html",
            "type": "string",
            "bindable": true
        },
        {
            "name": "icon",
            "type": "string",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "iconAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "menu",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "menuAlign",
            "type": "string",
            "defaultValue": "tl-bl?",
            "bindable": true
        },
        {
            "name": "pressed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "pressedDelay",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "pressed"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "stretchMenu",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        },
        {
            "name": "textAlign",
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
            "name": "toggleHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "button",
                    "type": "Ext.Button"
                },
                {
                    "name": "pressed",
                    "type": "Boolean"
                }
            ]
        },
        {
            "name": "ui",
            "type": "string",
            "bindable": true
        },
        {
            "name": "value",
            "type": "auto",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "release",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.Button",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.EventObject",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "tap",
            "params": [
                {
                    "name": "button",
                    "type": "Ext.Button",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.EventObject",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "beforepressedchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Button",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "pressedchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Button",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
