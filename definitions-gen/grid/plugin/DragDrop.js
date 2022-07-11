xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.DragDrop",
    "className": "Ext.grid.plugin.DragDrop",
    "classAlias": "plugin.gridviewdragdrop",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyDragDrop",
    "cfgs": [
        {
            "name": "allowCopy",
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
            "defaultValue": "gridDD"
        },
        {
            "name": "dragGroup",
            "type": "string"
        },
        {
            "name": "dragText",
            "type": "string",
            "defaultValue": "{0} selected row{1}"
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
                    "type": "Ext.data.Model",
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
                    "type": "Ext.data.Model",
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
