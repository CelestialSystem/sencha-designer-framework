xds.component.Registry.addDefinition({
    "type": "Ext.ux.CellDragDrop",
    "className": "Ext.ux.CellDragDrop",
    "classAlias": "plugin.celldragdrop",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyCellDragDrop",
    "cfgs": [
        {
            "name": "applyEmptyText",
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
            "name": "ddGroup",
            "type": "string",
            "defaultValue": "GridDD"
        },
        {
            "name": "dragText",
            "type": "string",
            "defaultValue": "{0} selected row{1}"
        },
        {
            "name": "dropBackgroundColor",
            "type": "string",
            "defaultValue": "green"
        },
        {
            "name": "emptyText",
            "type": "string"
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
            "name": "enforceType",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "noDropBackgroundColor",
            "type": "string",
            "defaultValue": "red"
        }
    ]
});
