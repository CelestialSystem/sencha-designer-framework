xds.component.Registry.addDefinition({
    "type": "Ext.data.BufferedStore",
    "className": "Ext.data.BufferedStore",
    "classAlias": "store.buffered",
    "inherits": "Ext.data.ProxyStore",
    "autoName": "MyBufferedStore",
    "cfgs": [
        {
            "name": "leadingBufferZone",
            "type": "number",
            "defaultValue": 200,
            "bindable": true
        },
        {
            "name": "purgePageCount",
            "type": "number",
            "defaultValue": 5,
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
            "defaultValue": 25,
            "bindable": true
        }
    ]
});
