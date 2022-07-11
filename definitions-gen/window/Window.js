xds.component.Registry.addDefinition({
    "type": "Ext.window.Window",
    "className": "Ext.window.Window",
    "classAlias": "widget.window",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyWindow",
    "typeAlias": [
        "Ext.Window"
    ],
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "animateTarget",
            "type": "string",
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "autoRender",
            "type": "boolean",
            "defaultValue": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-window"
        },
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "closeToolText",
            "type": "string",
            "defaultValue": "Close dialog"
        },
        {
            "name": "collapsed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "collapsible",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "constrain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "constrainHeader",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "defaultFocus",
            "type": "string",
            "alternates": [
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "expandOnShow",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "floating",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "ghost",
            "type": "boolean",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "hideMode",
            "type": "string",
            "defaultValue": "offsets"
        },
        {
            "name": "hideShadowOnDeactivate",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "keyMap",
            "type": "object",
            "defaultValue": {
                "scope": "this",
                "ESC": "onEsc"
            },
            "bindable": true
        },
        {
            "name": "maskClickAction",
            "type": "string",
            "defaultValue": "focus"
        },
        {
            "name": "maximizable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "maximized",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "minHeight",
            "type": "number",
            "defaultValue": 50,
            "bindable": true
        },
        {
            "name": "minimizable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "minWidth",
            "type": "number",
            "defaultValue": 50,
            "bindable": true
        },
        {
            "name": "monitorResize",
            "type": "boolean"
        },
        {
            "name": "onEsc",
            "type": "function"
        },
        {
            "name": "overlapHeader",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "plain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "resizable",
            "type": "boolean",
            "defaultValue": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "simpleDrag",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "tabGuard",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "x",
            "type": "number",
            "bindable": true
        },
        {
            "name": "y",
            "type": "number",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
            "params": [
                {
                    "name": "window",
                    "type": "Ext.window.Window",
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
            "name": "deactivate",
            "params": [
                {
                    "name": "window",
                    "type": "Ext.window.Window",
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
            "name": "maskclick",
            "params": [
                {
                    "name": "window",
                    "type": "Ext.window.Window",
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
                    "name": "window",
                    "type": "Ext.window.Window",
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
            "name": "minimize",
            "params": [
                {
                    "name": "window",
                    "type": "Ext.window.Window",
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
            "name": "resize",
            "params": [
                {
                    "name": "window",
                    "type": "Ext.window.Window",
                    "optional": true
                },
                {
                    "name": "width",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
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
                    "name": "window",
                    "type": "Ext.window.Window",
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
