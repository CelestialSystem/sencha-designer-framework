xds.component.Registry.addDefinition({
    "type": "Ext.container.Container",
    "className": "Ext.container.Container",
    "classAlias": "widget.container",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.mixin.Queryable",
        "Ext.mixin.Container",
        "Ext.mixin.FocusableContainer"
    ],
    "autoName": "MyContainer",
    "typeAlias": [
        "Ext.Container",
        "Ext.AbstractContainer"
    ],
    "cfgs": [
        {
            "name": "actions",
            "type": "object",
            "bindable": true
        },
        {
            "name": "activeItem",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "anchorSize",
            "type": "number",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "autoDestroy",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-container"
        },
        {
            "name": "bubbleEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "defaultFocus",
            "type": "string"
        },
        {
            "name": "defaults",
            "type": "object",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "panel"
        },
        {
            "name": "detachOnRemove",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "items",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "auto",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "renderTpl",
            "type": "template",
            "defaultValue": "<tpl if=\"hasTabGuard\">{% this.renderTabGuard(out, values, 'before'); %}</tpl>{% this.renderContainer(out,values) %}<tpl if=\"hasTabGuard\">{% this.renderTabGuard(out, values, 'after'); %}</tpl>",
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
            "name": "suspendLayout",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "add",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "afterlayout",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "layout",
                    "type": "Ext.layout.container.Container",
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
            "name": "beforeadd",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "beforeremove",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
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
            "name": "childmove",
            "params": [
                {
                    "name": "container",
                    "type": "Ext.container.Container",
                    "optional": true
                },
                {
                    "name": "component",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "prevIndex",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "newIndex",
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
                    "type": "Ext.container.Container",
                    "optional": true
                },
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
