xds.component.Registry.addDefinition({
    "type": "Ext.tree.ViewDropZone",
    "className": "Ext.tree.ViewDropZone",
    "inherits": "Ext.view.DropZone",
    "autoName": "MyViewDropZone",
    "cfgs": [
        {
            "name": "allowContainerDrops",
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
            "name": "expandDelay",
            "type": "number",
            "defaultValue": 500
        }
    ]
});
