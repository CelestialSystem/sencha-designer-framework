xds.component.Registry.addDefinition({
    "type": "Ext.Panel",
    "className": "Ext.Panel",
    "classAlias": "widget.panel",
    "inherits": "Ext.Container",
    "mixin": [
        "Ext.mixin.Toolable"
    ],
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.panel.Panel"
    ],
    "cfgs": [
        {
            "name": "anchor",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "bbar",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "bodyBorder",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "bodyPadding",
            "type": "auto",
            "allowBoolean": true,
            "bindable": true
        },
        {
            "name": "bodyStyle",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "border",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "buttonAlign",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        },
        {
            "name": "buttons",
            "type": "object",
            "bindable": true
        },
        {
            "name": "buttonToolbar",
            "type": "object",
            "defaultValue": {
                "xtype": "toolbar",
                "itemId": "buttonToolbar",
                "docked": "bottom",
                "defaultType": "button",
                "weighted": true,
                "ui": "footer",
                "defaultButtonUI": "action",
                "layout": {
                    "type": "box",
                    "vertical": false,
                    "pack": "center"
                }
            },
            "bindable": true
        },
        {
            "name": "closable",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "closeAction",
            "type": "string",
            "defaultValue": "destroy",
            "bindable": true
        },
        {
            "name": "closeToolText",
            "type": "string",
            "defaultValue": "Close panel",
            "bindable": true
        },
        {
            "name": "collapsed",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "collapsible",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "header",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "headerPosition",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "top",
            "bindable": true
        },
        {
            "name": "icon",
            "type": "string",
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
            "name": "lbar",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "manageBorders",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "minButtonWidth",
            "type": "number",
            "defaultValue": 75,
            "bindable": true
        },
        {
            "name": "rbar",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "resizable",
            "type": "object",
            "bindable": true
        },
        {
            "name": "standardButtons",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tbar",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "titleAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "titleCollapse",
            "type": "boolean",
            "defaultValue": null
        }
    ],
    "eventDefs": [
        {
            "name": "beforecollapse",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "beforeexpand",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "beforeresizedragstart",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
            "name": "collapse",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "drawerhide",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "drawershow",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "expand",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.panel.Panel",
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
            "name": "resizedrag",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
            "name": "resizedragcancel",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
            "name": "resizedragend",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
            "name": "resizedragstart",
            "params": [
                {
                    "name": "panel",
                    "type": "Ext.Panel",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
