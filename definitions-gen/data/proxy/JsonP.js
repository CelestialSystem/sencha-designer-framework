xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.JsonP",
    "className": "Ext.data.proxy.JsonP",
    "classAlias": "proxy.jsonp",
    "inherits": "Ext.data.proxy.Server",
    "autoName": "MyJsonP",
    "typeAlias": [
        "Ext.data.ScriptTagProxy"
    ],
    "cfgs": [
        {
            "name": "autoAppendParams",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "callbackKey",
            "type": "string",
            "defaultValue": "callback",
            "bindable": true
        },
        {
            "name": "recordParam",
            "type": "string",
            "defaultValue": "records",
            "bindable": true
        }
    ]
});
