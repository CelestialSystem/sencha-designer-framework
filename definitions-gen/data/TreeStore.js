xds.component.Registry.addDefinition({
    "type": "Ext.data.TreeStore",
    "className": "Ext.data.TreeStore",
    "classAlias": "store.tree",
    "inherits": "Ext.data.Store",
    "autoName": "MyTreeStore",
    "cfgs": [
        {
            "name": "clearOnLoad",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "clearRemovedOnLoad",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "defaultRootId",
            "type": "string",
            "defaultValue": "root",
            "bindable": true
        },
        {
            "name": "defaultRootProperty",
            "type": "string",
            "defaultValue": "children",
            "bindable": true
        },
        {
            "name": "defaultRootText",
            "type": "string",
            "defaultValue": "Root",
            "bindable": true
        },
        {
            "name": "fields",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "filterer",
            "type": "string",
            "defaultValue": "topdown"
        },
        {
            "name": "folderSort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "groupDir",
            "type": "string",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "grouper",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "groupField",
            "type": "string",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "lazyFill",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "nodeParam",
            "type": "string",
            "defaultValue": "node",
            "bindable": true
        },
        {
            "name": "pageSize",
            "type": "number",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "parentIdProperty",
            "type": "string",
            "bindable": true
        },
        {
            "name": "root",
            "type": "object",
            "bindable": true
        },
        {
            "name": "rootVisible",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
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
            "name": "nodeappend",
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
            "name": "nodebeforeappend",
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
            "name": "nodebeforecollapse",
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
            "name": "nodebeforeexpand",
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
            "name": "nodebeforeinsert",
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
            "name": "nodebeforemove",
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
            "name": "nodebeforeremove",
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
            "name": "nodecollapse",
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
            "name": "nodeexpand",
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
            "name": "nodeinsert",
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
            "name": "nodemove",
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
            "name": "noderemove",
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
            "name": "nodesort",
            "params": [
                {
                    "name": "nodeinterface",
                    "type": "Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "childNodes",
                    "type": "Ext.data.NodeInterface[]",
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
            "name": "rootchange",
            "params": [
                {
                    "name": "newRoot",
                    "type": "Ext.data.TreeModel/Ext.data.NodeInterface",
                    "optional": true
                },
                {
                    "name": "oldRoot",
                    "type": "Ext.data.TreeModel/Ext.data.NodeInterface",
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
