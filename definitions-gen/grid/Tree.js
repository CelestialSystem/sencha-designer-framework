xds.component.Registry.addDefinition({
    "type": "Ext.grid.Tree",
    "className": "Ext.grid.Tree",
    "classAlias": "widget.tree",
    "inherits": "Ext.grid.Grid",
    "autoName": "MyTree",
    "typeAlias": [
        "Ext.tree.Tree"
    ],
    "cfgs": [
        {
            "name": "expanderFirst",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "expanderOnly",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "folderSort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "selectOnExpander",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "singleExpand",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeload",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.operation.Operation",
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
            "name": "beforenodecollapse",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.grid.Row",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.NodeInterface",
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
            "name": "beforenodeexpand",
            "params": [
                {
                    "name": "row",
                    "type": "Ext.grid.Row",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.NodeInterface",
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
                    "name": "treestore",
                    "type": "Ext.data.TreeStore",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.data.TreeModel[]",
                    "optional": true
                },
                {
                    "name": "successful",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.operation.Operation",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
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
            "name": "nodecollapse",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.grid.Row",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.NodeInterface",
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
            "name": "nodeexpand",
            "params": [
                {
                    "name": "row",
                    "type": "Ext.grid.Row",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.NodeInterface",
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
            "name": "checkchange",
            "params": [
                {
                    "name": "cell",
                    "type": "Ext.grid.cell.Tree"
                },
                {
                    "name": "checked",
                    "type": "boolean"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ]
        },
        {
            "name": "beforecheckchange",
            "params": [
                {
                    "name": "this",
                    "type": "Ext.grid.cell.Tree"
                },
                {
                    "name": "checked",
                    "type": "boolean"
                },
                {
                    "name": "current",
                    "type": "boolean"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ]
        }
    ]
});
