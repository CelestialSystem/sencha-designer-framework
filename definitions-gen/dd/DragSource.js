xds.component.Registry.addDefinition({
    "type": "Ext.dd.DragSource",
    "className": "Ext.dd.DragSource",
    "inherits": "Ext.dd.DDProxy",
    "autoName": "MyDragSource",
    "cfgs": [
        {
            "name": "animRepair",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "ddGroup",
            "type": "string"
        },
        {
            "name": "dropAllowed",
            "type": "string",
            "defaultValue": "x-dd-drop-ok"
        },
        {
            "name": "dropNotAllowed",
            "type": "string",
            "defaultValue": "x-dd-drop-nodrop"
        },
        {
            "name": "repairHighlightColor",
            "type": "string",
            "defaultValue": "c3daf9"
        }
    ]
});
