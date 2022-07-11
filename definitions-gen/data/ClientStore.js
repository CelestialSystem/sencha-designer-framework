xds.component.Registry.addDefinition({
    "type": "Ext.data.ClientStore",
    "className": "Ext.data.ClientStore",
    "classAlias": "store.clientstorage",
    "inherits": "Ext.data.Store",
    "autoName": "MyClientStore",
    "cfgs": [
        {
            "name": "storage",
            "type": "string",
            "editor": "options",
            "options": [
                "local",
                "session"
            ],
            "defaultValue": "local",
            "bindable": true
        },
        {
            "name": "storageKey",
            "type": "string",
            "bindable": true
        }
    ]
});
