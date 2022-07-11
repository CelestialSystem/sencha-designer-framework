xds.component.Registry.addDefinition({
    "type": "Ext.Component",
    "className": "Ext.Component",
    "classAlias": "widget.component",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Inheritable",
        "Ext.util.Floating",
        "Ext.util.Positionable",
        "Ext.util.Observable",
        "Ext.mixin.ComponentDelegation",
        "Ext.mixin.Bindable",
        "Ext.util.Animate",
        "Ext.util.ElementContainer",
        "Ext.util.Renderable",
        "Ext.state.Stateful",
        "Ext.mixin.Focusable",
        "Ext.mixin.Accessible",
        "Ext.mixin.Keyboard"
    ],
    "autoName": "MyComponent",
    "typeAlias": [
        "Ext.AbstractComponent"
    ],
    "cfgs": [
        {
            "name": "alignTarget",
            "type": "string"
        },
        {
            "name": "anchor",
            "type": "string"
        },
        {
            "name": "autoEl",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "autoRender",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "autoShow",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-component"
        },
        {
            "name": "border",
            "type": "auto",
            "allowBoolean": true,
            "bindable": true
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": {},
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "columnWidth",
            "type": "number"
        },
        {
            "name": "componentCls",
            "type": "string"
        },
        {
            "name": "componentLayout",
            "type": "string",
            "defaultValue": "autocomponent",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "constraintInsets",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "constrainTo",
            "type": "object"
        },
        {
            "name": "contentEl",
            "type": "string"
        },
        {
            "name": "data",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultAlign",
            "type": "string",
            "defaultValue": "c-c"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "disabledCls",
            "type": "string",
            "defaultValue": "x-item-disabled"
        },
        {
            "name": "dock",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "bindable": true
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "flex",
            "type": "number",
            "bindable": true
        },
        {
            "name": "floating",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "formBind",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "frame",
            "type": "boolean"
        },
        {
            "name": "height",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "hideMode",
            "type": "string",
            "defaultValue": "display"
        },
        {
            "name": "html",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "itemId",
            "type": "string"
        },
        {
            "name": "liquidLayout",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "liveDrag",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "loader",
            "type": "object"
        },
        {
            "name": "margin",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "maskDefaults",
            "type": "object"
        },
        {
            "name": "maskElement",
            "type": "string"
        },
        {
            "name": "maxHeight",
            "type": "number",
            "bindable": true
        },
        {
            "name": "maxWidth",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minHeight",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minWidth",
            "type": "number",
            "bindable": true
        },
        {
            "name": "modelValidation",
            "type": "boolean"
        },
        {
            "name": "overCls",
            "type": "string"
        },
        {
            "name": "padding",
            "type": "auto"
        },
        {
            "name": "plugins",
            "type": "array",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "region",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "east",
                "north",
                "south",
                "west"
            ]
        },
        {
            "name": "renderConfig",
            "type": "object"
        },
        {
            "name": "renderData",
            "type": "object"
        },
        {
            "name": "renderTo",
            "type": "string"
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": "{%this.renderContent(out,values)%}",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "resizable",
            "type": "boolean",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "resizeHandles",
            "type": "string",
            "defaultValue": "all"
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
            "name": "shrinkWrap",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 2
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
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
            "name": "tabIndex",
            "type": "number",
            "bindable": true
        },
        {
            "name": "toFrontOnShow",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "touchAction",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "tplWriteMode",
            "type": "string",
            "defaultValue": "overwrite"
        },
        {
            "name": "ui",
            "type": "string",
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "userCls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "weight",
            "type": "number"
        },
        {
            "name": "width",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "xtype",
            "type": "object"
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
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
            "name": "added",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "pos",
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
            "name": "afterlayoutanimation",
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
            "name": "afterrender",
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
            "name": "beforeactivate",
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
            "name": "beforedeactivate",
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
            "name": "beforedestroy",
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
            "name": "beforerender",
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
            "name": "boxready",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "deactivate",
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
            "name": "disable",
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
            "name": "enable",
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
            "name": "move",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "x",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
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
            "name": "removed",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "ownerCt",
                    "type": "Ext.container.Container",
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
            "name": "render",
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
            "name": "resize",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
                    "name": "oldWidth",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "oldHeight",
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
        }
    ]
});
