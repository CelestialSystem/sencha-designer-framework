xds.component.Registry.addDefinition({
    "type": "Ext.dataview.NestedList",
    "className": "Ext.dataview.NestedList",
    "classAlias": "widget.nestedlist",
    "inherits": "Ext.Container",
    "autoName": "MyNestedList",
    "typeAlias": [
        "Ext.NestedList"
    ],
    "cfgs": [
        {
            "name": "allowDeselect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "backButton",
            "type": "object",
            "defaultValue": {
                "hidden": true
            },
            "bindable": true
        },
        {
            "name": "backText",
            "type": "string",
            "defaultValue": "Back",
            "bindable": true
        },
        {
            "name": "detailCard",
            "type": "object",
            "bindable": true
        },
        {
            "name": "detailContainer",
            "type": "object",
            "bindable": true
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "emptyText",
            "type": "string",
            "defaultValue": "No items available.",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": {
                "type": "card",
                "animation": {
                    "type": "slide",
                    "duration": 250,
                    "direction": "left"
                }
            },
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "listConfig",
            "type": "object",
            "bindable": true
        },
        {
            "name": "loadingText",
            "type": "string",
            "defaultValue": "Loading...",
            "bindable": true
        },
        {
            "name": "onItemDisclosure",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "toolbar",
            "type": "object",
            "defaultValue": {
                "docked": "top",
                "xtype": "titlebar",
                "ui": "light",
                "inline": true
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "updateTitleText",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "useTitleAsBackText",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "variableHeights",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "back",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "lastActiveList",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "detailCardActive",
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
            "name": "beforeload",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.Operation",
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
            "name": "containertap",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "deselect",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "selections",
                    "type": "Array",
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
            "name": "itemdoubletap",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Record",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "itemtap",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Record",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "leafitemtap",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.List",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Record",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "listchange",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "listitem",
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
            "name": "load",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.util.Grouper[]",
                    "optional": true
                },
                {
                    "name": "successful",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.Operation",
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
            "name": "select",
            "params": [
                {
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "selections",
                    "type": "Array",
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
                    "name": "nestedlist",
                    "type": "Ext.dataview.NestedList",
                    "optional": true
                },
                {
                    "name": "list",
                    "type": "Ext.dataview.List",
                    "optional": true
                },
                {
                    "name": "selections",
                    "type": "Array",
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
