xds.component.Registry.addDefinition({
    "type": "Ext.dd.DragZone",
    "className": "Ext.dd.DragZone",
    "inherits": "Ext.dd.DragSource",
    "autoName": "MyDragZone",
    "cfgs": [
        {
            "name": "containerScroll",
            "type": "object",
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "scrollEl",
            "type": "string"
        }
    ]
});
