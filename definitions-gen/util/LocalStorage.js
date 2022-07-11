xds.component.Registry.addDefinition({
    "type": "Ext.util.LocalStorage",
    "className": "Ext.util.LocalStorage",
    "inherits": "Ext.Base",
    "autoName": "MyLocalStorage",
    "cfgs": [
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "lazyKeys",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "prefix",
            "type": "string"
        },
        {
            "name": "session",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
