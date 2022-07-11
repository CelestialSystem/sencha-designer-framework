xds.component.Registry.addDefinition({
    "type": "Ext.plugin.dd.DragDrop",
    "className": "Ext.plugin.dd.DragDrop",
    "inherits": "Ext.plugin.Abstract",
   
    "autoName": "MyDragDrop",
    "typeAlias": [
        "Ext.DragDrop"
    ],
    "cfgs": [
        {
            "name": "dragText",
            "type": "string"
        },{
            "name": "enableDrag",
            "type": "boolean",
            "defaultValue": true
        },{
            "name": "containerScroll",
            "type": "boolean",
            "defaultValue": true
        },{
            "name": "dropIndicator",
            "type": "string",
            "defaultValue": null
        },{
            "name": "enableDrop",
            "type": "boolean",
            "defaultValue": true
        },{
            "name": "handle",
            "type": "string",
            "defaultValue": null
        },{
            "name": "groups",
            "type": "string",
            "defaultValue": null
        },{
            "name": "overCls",
            "type": "string",
            "defaultValue": ""
        },{
            "name": "scrollAmount",
            "type": "number",
            "defaultValue": 80
        },
        {
            "name": "activateOnLongPress",
            "type": "boolean",
            "defaultValue": "false/true based on device"
        }
    ]
});
