xds.component.Registry.addDefinition({
    "type": "Ext.Widget",
    "className": "Ext.Widget",
    "classAlias": "widget.widget",
    "inherits": "Ext.Evented",
    "mixin": [
        "Ext.mixin.Inheritable",
        "Ext.mixin.Bindable",
        "Ext.mixin.ComponentDelegation",
        "Ext.mixin.Pluggable",
        "Ext.mixin.Keyboard",
        "Ext.mixin.Factoryable",
        "Ext.mixin.Focusable",
        "Ext.mixin.Accessible"
    ],
    "autoName": "MyWidget",
    "typeAlias": [
        "Ext.Gadget"
    ],
    "cfgs": [
        {
            "name": "alwaysOnTop",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "border",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "constrainAlign",
            "type": "string",
            "bindable": true
        },
        {
            "name": "disabled",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "flex",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "floated",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "height",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
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
            "defaultValue": "display",
            "bindable": true
        },
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "itemId",
            "type": "string",
            "bindable": true
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "relative",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "renderTo",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ripple",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "selfAlign",
            "type": "string",
            "bindable": true
        },
        {
            "name": "shadow",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "shim",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "style",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "toFrontOnShow",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "touchAction",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ui",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "userCls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "width",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "x",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "y",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforetofront",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "tofront",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "beforedisabledchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
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
            "name": "disabledchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
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
        },
        {
            "name": "beforeheightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "heightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "beforehiddenchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
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
            "name": "hiddenchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
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
        },
        {
            "name": "beforewidthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "widthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "heightchange",
            "params": [
                {
                    "name": "widget",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "widthchange",
            "params": [
                {
                    "name": "widget",
                    "type": "Ext.Widget",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String",
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
            "name": "hiddenchange",
            "params": [
                {
                    "name": "widget",
                    "type": "Ext.Widget",
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
