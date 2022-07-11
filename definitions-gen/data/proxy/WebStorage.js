xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.WebStorage",
    "className": "Ext.data.proxy.WebStorage",
    "inherits": "Ext.data.proxy.Client",
    "autoName": "MyWebStorage",
    "typeAlias": [
        "Ext.data.WebStorageProxy"
    ],
    "cfgs": [
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "reader",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "writer",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
