xds.component.Registry.addDefinition({
    "type": "Ext.data.NodeInterface",
    "className": "Ext.data.NodeInterface",
    "inherits": "Ext.Base",
    "autoName": "MyNodeInterface",
    "cfgs": [
        {
            "name": "allowDrag",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "allowDrop",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "checked",
            "type": "boolean"
        },
        {
            "name": "children",
            "type": "array"
        },
        {
            "name": "cls",
            "type": "string"
        },
        {
            "name": "expandable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "expanded",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "glyph",
            "type": "auto"
        },
        {
            "name": "href",
            "type": "string"
        },
        {
            "name": "hrefTarget",
            "type": "string"
        },
        {
            "name": "icon",
            "type": "string"
        },
        {
            "name": "iconCls",
            "type": "string"
        },
        {
            "name": "leaf",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "qshowDelay",
            "type": "number"
        },
        {
            "name": "qtip",
            "type": "string"
        },
        {
            "name": "qtitle",
            "type": "string"
        },
        {
            "name": "text",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "append",
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
            "name": "beforeappend",
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
            "name": "beforecollapse",
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
            "name": "beforeexpand",
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
            "name": "beforeinsert",
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
            "name": "beforemove",
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
            "name": "beforeremove",
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
            "name": "collapse",
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
            "name": "expand",
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
            "name": "insert",
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
            "name": "move",
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
            "name": "remove",
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
            "name": "sort",
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
        }
    ]
});
