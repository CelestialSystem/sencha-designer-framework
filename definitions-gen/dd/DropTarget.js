xds.component.Registry.addDefinition({
    "type": "Ext.dd.DropTarget",
    "className": "Ext.dd.DropTarget",
    "inherits": "Ext.dd.DDTarget",
    "autoName": "MyDropTarget",
    "cfgs": [
        {
            "name": "containerScroll",
            "type": "boolean",
            "defaultValue": false
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
            "name": "overClass",
            "type": "string"
        }
    ]
});
