xds.component.Registry.addDefinition({
    "type": "Ext.Component",
    "className": "Ext.Component",
    "classAlias": "widget.component",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.state.Stateful"
    ],
    "autoName": "MyComponent",
    "typeAlias": [
        "Ext.lib.Component"
    ],
    "cfgs": [
        {
            "name": "axisLock",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "bottom",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "centered",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "contentEl",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "data",
            "type": "object",
            "bindable": true
        },
        {
            "name": "displayed",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "bindable": true
        },
        {
            "name": "draggable",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "fullscreen",
            "type": "boolean"
        },
        {
            "name": "hideAnimation",
            "type": "string",
            "bindable": true
        },
        {
            "name": "hideOnMaskTap",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "html",
            "type": "string",
            "bindable": true
        },
        {
            "name": "left",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "margin",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "maxHeight",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "maxWidth",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "minHeight",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "minWidth",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "modal",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "modelValidation",
            "type": "boolean"
        },
        {
            "name": "padding",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "record",
            "type": "object",
            "bindable": true
        },
        {
            "name": "right",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "scrollable",
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
            "name": "showAnimation",
            "type": "string",
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "bindable": true
        },
        {
            "name": "tooltip",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "top",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "string",
            "bindable": true
        },
        {
            "name": "tplWriteMode",
            "type": "string",
            "defaultValue": "overwrite",
            "bindable": true
        },
        {
            "name": "userSelectable",
            "type": "boolean",
            "defaultValue": false,
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
            "name": "weight",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "xtype",
            "type": "string"
        },
        {
            "name": "zIndex",
            "type": "number",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "added",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.Container",
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
            "name": "beforehide",
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
            "name": "beforeshow",
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
            "name": "destroy",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "erased",
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
            "name": "fullscreen",
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
            "name": "hide",
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
            "name": "initialize",
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
            "name": "moved",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.Container",
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
            "name": "painted",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "element",
                    "type": "Ext.Element",
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
            "name": "positionedchange",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "positioned",
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
            "name": "removed",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.Container",
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
            "name": "resize",
            "params": [
                {
                    "name": "element",
                    "type": "Ext.Element",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "show",
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
            "name": "updatedata",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "newData",
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
            "name": "beforebottomchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "bottomchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforecenteredchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "centeredchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforedockedchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "String",
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
            "name": "dockedchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "String",
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
            "name": "beforeleftchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "leftchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforemaxHeightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "maxHeightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforemaxWidthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "maxWidthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforeminHeightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "minHeightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforeminWidthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "minWidthchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforerightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "rightchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "beforescrollablechange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Boolean/String/Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Boolean/String/Object",
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
            "name": "scrollablechange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Boolean/String/Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Boolean/String/Object",
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
            "name": "beforetopchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
            "name": "topchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.Component",
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
        }
    ]
});
