xds.component.Registry.addDefinition({
    "type": "Ext.toolbar.Breadcrumb",
    "className": "Ext.toolbar.Breadcrumb",
    "classAlias": "widget.breadcrumb",
    "inherits": "Ext.container.Container",
    "autoName": "MyBreadcrumb",
    "cfgs": [
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-breadcrumb"
        },
        {
            "name": "buttonUI",
            "type": "string",
            "defaultValue": "plain-toolbar",
            "bindable": true
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "focusableContainer",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": {
                "type": "hbox",
                "align": "middle"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "overflowHandler",
            "type": "string",
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "selection",
            "type": "object",
            "defaultValue": "root",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "showIcons",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "showMenuIcons",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "useSplitButtons",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "breadcrumb",
                    "type": "Ext.toolbar.Breadcrumb",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "prevNode",
                    "type": "Ext.data.TreeModel",
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
            "name": "selectionchange",
            "params": [
                {
                    "name": "breadcrumb",
                    "type": "Ext.toolbar.Breadcrumb",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "prevNode",
                    "type": "Ext.data.TreeModel",
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
