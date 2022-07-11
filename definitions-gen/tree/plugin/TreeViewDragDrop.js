xds.component.Registry.addDefinition({
    "type": "Ext.tree.plugin.TreeViewDragDrop",
    "className": "Ext.tree.plugin.TreeViewDragDrop",
    "classAlias": "plugin.treeviewdragdrop",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyTreeViewDragDrop",
    "cfgs": [
        {
            "name": "allowContainerDrops",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "allowCopy",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "allowParentInserts",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "appendOnly",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "containerScroll",
            "type": "object",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "copy",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "ddGroup",
            "type": "string",
            "defaultValue": "TreeDD"
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text"
        },
        {
            "name": "dragGroup",
            "type": "string"
        },
        {
            "name": "dragText",
            "type": "string",
            "defaultValue": "{0} selected node{1}"
        },
        {
            "name": "dragZone",
            "type": "object"
        },
        {
            "name": "dropGroup",
            "type": "string"
        },
        {
            "name": "dropZone",
            "type": "object"
        },
        {
            "name": "enableDrag",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableDrop",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "expandDelay",
            "type": "number",
            "defaultValue": 1000
        },
        {
            "name": "nodeHighlightColor",
            "type": "string",
            "defaultValue": "c3daf9"
        },
        {
            "name": "nodeHighlightOnDrop",
            "type": "boolean"
        },
        {
            "name": "nodeHighlightOnRepair",
            "type": "boolean"
        },
        {
            "name": "sortOnDrop",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "beforedrop",
            "params": [
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "data",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "overModel",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "dropPosition",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "dropHandlers",
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
            "name": "drop",
            "params": [
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "data",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "overModel",
                    "type": "Ext.data.TreeModel",
                    "optional": true
                },
                {
                    "name": "dropPosition",
                    "type": "String",
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
