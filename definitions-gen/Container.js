xds.component.Registry.addDefinition({
    "type": "Ext.Container",
    "className": "Ext.Container",
    "classAlias": "widget.container",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Queryable",
        "Ext.mixin.Container",
        "Ext.mixin.FocusableContainer"
    ],
    "autoName": "MyContainer",
    "typeAlias": [
        "Ext.lib.Container",
        "Ext.container.Container"
    ],
    "cfgs": [
        {
            "name": "activeItem",
            "type": "object",
            "defaultValue": 0,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "autoDestroy",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoSize",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "control",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultFocus",
            "type": "string",
            "bindable": true
        },
        {
            "name": "defaults",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "container",
            "bindable": true
        },
        {
            "name": "innerCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "items",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": "auto",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "manageBorders",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "masked",
            "type": "boolean",
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
            "name": "weighted",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
            "params": [
                {
                    "name": "newActiveItem",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "oldActiveItem",
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
            "name": "add",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "deactivate",
            "params": [
                {
                    "name": "oldActiveItem",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "newActiveItem",
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
            "name": "move",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "toIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "fromIndex",
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
            "name": "remove",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "index",
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
            "name": "beforeactiveItemchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Ext.Component/Object/String/Number",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Ext.Component/Object/String/Number",
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
            "name": "activeItemchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Container",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Ext.Component/Object/String/Number",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Ext.Component/Object/String/Number",
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
