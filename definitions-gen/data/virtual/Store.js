xds.component.Registry.addDefinition({
    "type": "Ext.data.virtual.Store",
    "className": "Ext.data.virtual.Store",
    "classAlias": "store.virtual",
    "inherits": "Ext.data.ProxyStore",
    "autoName": "MyStore",
    "cfgs": [
        {
            "name": "leadingBufferZone",
            "type": "number",
            "defaultValue": 200,
            "bindable": true
        },
        {
            "name": "remoteFilter",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "remoteSort",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "sortOnLoad",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "trackRemoved",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "trailingBufferZone",
            "type": "number",
            "defaultValue": 50,
            "bindable": true
        }
    ]
});
