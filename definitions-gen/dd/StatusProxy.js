xds.component.Registry.addDefinition({
    "type": "Ext.dd.StatusProxy",
    "className": "Ext.dd.StatusProxy",
    "inherits": "Ext.Component",
    "autoName": "MyStatusProxy",
    "cfgs": [
        {
            "name": "dropAllowed",
            "type": "string",
            "defaultValue": "x-dd-drop-ok"
        },
        {
            "name": "dropNotAllowed",
            "type": "string",
            "defaultValue": "x-dd-drop-nodrop"
        }
    ]
});
