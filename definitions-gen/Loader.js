xds.component.Registry.addDefinition({
    "type": "Ext.Loader",
    "className": "Ext.Loader",
    "autoName": "MyLoader",
    "cfgs": [
        {
            "name": "disableCaching",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "disableCachingParam",
            "type": "string",
            "defaultValue": "_dc"
        },
        {
            "name": "enabled",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "paths",
            "type": "object"
        },
        {
            "name": "preserveScripts",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "scriptChainDelay",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scriptCharset",
            "type": "string"
        }
    ]
});
