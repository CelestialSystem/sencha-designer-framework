xds.component.Registry.addDefinition({
    "type": "Ext.tree.Panel",
    "className": "Ext.tree.Panel",
    "classAlias": "widget.treepanel",
    "inherits": "Ext.panel.Table",
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
    ],
    "cfgs": [
        {
            "name": "animate",
            "type": "boolean"
        },
        {
            "name": "checkPropagation",
            "type": "string",
            "defaultValue": "none"
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text"
        },
        {
            "name": "folderSort",
            "type": "boolean"
        },
        {
            "name": "lines",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "root",
            "type": "object"
        },
        {
            "name": "rootVisible",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "rowLines",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "singleExpand",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "useArrows",
            "type": "boolean",
            "defaultValue": false
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
            "name": "beforecheckchange",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
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
            "name": "beforeitemappend",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
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
            "name": "beforeitemcollapse",
            "params": [
                {
                    "name": "nodeinterface",
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
            "name": "beforeitemexpand",
            "params": [
                {
                    "name": "nodeinterface",
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
            "name": "beforeiteminsert",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "refNode",
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
            "name": "beforeitemmove",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "oldParent",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "newParent",
                    "type": "Ext.data.NodeInterface",
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
            "name": "beforeitemremove",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "isMove",
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
            "name": "checkchange",
            "params": [
                {
                    "name": "node",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "checked",
                    "type": "Boolean",
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
            "name": "itemappend",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
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
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "itemcollapse",
            "params": [
                {
                    "name": "nodeinterface",
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
            "name": "itemexpand",
            "params": [
                {
                    "name": "nodeinterface",
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
            "name": "iteminsert",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "refNode",
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
            "name": "itemmove",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "oldParent",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "newParent",
                    "type": "Ext.data.NodeInterface",
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
            "name": "itemremove",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "isMove",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "context",
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
        }
    ]
});
