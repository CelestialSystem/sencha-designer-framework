xds.component.Registry.addDefinition({
    "type": "Ext.Dialog",
    "className": "Ext.Dialog",
    "classAlias": "widget.dialog",
    "inherits": "Ext.Panel",
    "autoName": "MyDialog",
    "typeAlias": [
        "Ext.Window",
        "Ext.window.Window"
    ],
    "cfgs": [
        {
            "name": "bodyBorder",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "border",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "centered",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "constrainDrag",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "dismissAction",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "cancel",
                "abort",
                "no",
                "close"
            ],
            "bindable": true
        },
        {
            "name": "dismissHandler",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": {
                "handle": ".x-draggable",
                "listeners": {
                    "beforedragstart": "onBeforeDragDialog",
                    "scope": "this"
                }
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "floated",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "hideAnimation",
            "type": "string",
            "defaultValue": {
                "type": "popOut",
                "duration": 250,
                "easing": "ease-out"
            },
            "bindable": true
        },
        {
            "name": "hideMode",
            "type": "string",
            "editor": "options",
            "options": [
                "clip",
                "display",
                "offsets",
                "opacity",
                "visibility"
            ],
            "defaultValue": "offsets",
            "bindable": true
        },
        {
            "name": "keyMap",
            "type": "object",
            "defaultValue": {
                "ESC": "onEscape",
                "scope": "this"
            },
            "bindable": true
        },
        {
            "name": "maskTapHandler",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "maximizable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maximizeAnimation",
            "type": "object",
            "defaultValue": {
                "easing": "ease-in",
                "from": {
                    "opacity": 0.6
                },
                "to": {
                    "opacity": 1
                }
            },
            "bindable": true
        },
        {
            "name": "maximized",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maximizeProxy",
            "type": "object",
            "defaultValue": {
                "centered": false,
                "draggable": false,
                "modal": false,
                "showAnimation": null,
                "hideAnimation": null
            },
            "bindable": true
        },
        {
            "name": "maximizeTool",
            "type": "object",
            "defaultValue": {
                "itemId": "maximize",
                "tooltip": "Maximize to fullscreen"
            },
            "bindable": true
        },
        {
            "name": "modal",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "restoreAnimation",
            "type": "object",
            "defaultValue": {
                "easing": "ease-in",
                "from": {
                    "opacity": 1
                },
                "to": {
                    "opacity": 0.6
                }
            },
            "bindable": true
        },
        {
            "name": "restoreTool",
            "type": "object",
            "defaultValue": {
                "itemId": "restore",
                "tooltip": "Restore to original size"
            },
            "bindable": true
        },
        {
            "name": "shadow",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showAnimation",
            "type": "string",
            "defaultValue": {
                "type": "popIn",
                "duration": 150,
                "easing": "ease-out"
            },
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": -1,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforemaximize",
            "params": [
                {
                    "name": "dialog",
                    "type": "Ext.Dialog",
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
            "name": "beforerestore",
            "params": [
                {
                    "name": "dialog",
                    "type": "Ext.Dialog",
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
            "name": "maximize",
            "params": [
                {
                    "name": "dialog",
                    "type": "Ext.Dialog",
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
            "name": "restore",
            "params": [
                {
                    "name": "dialog",
                    "type": "Ext.Dialog",
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
