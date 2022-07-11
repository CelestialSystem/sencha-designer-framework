xds.component.Registry.addDefinition({
    "type": "Ext.BreadcrumbBar",
    "className": "Ext.BreadcrumbBar",
    "classAlias": "widget.breadcrumbbar",
    "inherits": "Ext.Toolbar",
    "autoName": "MyBreadcrumb",

    "cfgs": [
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
            "name": "showIcons",
            "type": "boolean",
            "defaultValue": null
        },
        {
            "name": "showMenuIcons",
            "type": "boolean",
            "defaultValue": null
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
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "useSplitButtons",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "menu",
            "type": "boolean",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "buttonConfig",
            "type": "object",
            "defaultValue": null,
            "bindable": true
        },
        {
            "name": "btnCls",
            "type": "string",
            "defaultValue": null
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "breadcrumb",
                    "type": "Ext.BreadcrumbBar",
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
                    "type": "Ext.BreadcrumbBar",
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
