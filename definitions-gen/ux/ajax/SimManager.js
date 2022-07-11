xds.component.Registry.addDefinition({
    "type": "Ext.ux.ajax.SimManager",
    "className": "Ext.ux.ajax.SimManager",
    "inherits": "Ext.Base",
    "autoName": "MySimManager",
    "cfgs": [
        {
            "name": "defaultSimlet",
            "type": "object"
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "basic"
        },
        {
            "name": "delay",
            "type": "number",
            "defaultValue": 150
        }
    ]
});
