xds.component.Registry.addDefinition({
    "type": "Ext.tree.View",
    "className": "Ext.tree.View",
    "classAlias": "widget.treeview",
    "inherits": "Ext.view.Table",
    "autoName": "MyView",
    "cfgs": [
        {
            "name": "animate",
            "type": "boolean"
        },
        {
            "name": "loadingCls",
            "type": "string",
            "defaultValue": "x-grid-tree-loading"
        },
        {
            "name": "loadMask",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "rootVisible",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "selectionModel",
            "type": "object",
            "defaultValue": {
                "type": "treemodel"
            },
            "bindable": true
        },
        {
            "name": "stripeRows",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "toggleOnDblClick",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "afteritemcollapse",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
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
            "name": "afteritemexpand",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "HTMLElement",
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
            "name": "nodedragover",
            "params": [
                {
                    "name": "targetNode",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "position",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "dragData",
                    "type": "Object",
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
        }
    ]
});
