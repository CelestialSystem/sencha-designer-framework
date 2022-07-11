xds.component.Registry.addDefinition({
    "type": "Ext.data.Request",
    "className": "Ext.data.Request",
    "inherits": "Ext.Base",
    "autoName": "MyRequest",
    "cfgs": [
        {
            "name": "action",
            "type": "string",
            "bindable": true
        },
        {
            "name": "binary",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "callbackKey",
            "type": "string",
            "bindable": true
        },
        {
            "name": "disableCaching",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "headers",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "jsonData",
            "type": "object",
            "bindable": true
        },
        {
            "name": "method",
            "type": "string",
            "defaultValue": "GET",
            "bindable": true
        },
        {
            "name": "operation",
            "type": "object",
            "bindable": true
        },
        {
            "name": "params",
            "type": "object",
            "bindable": true
        },
        {
            "name": "password",
            "type": "string",
            "bindable": true
        },
        {
            "name": "proxy",
            "type": "object",
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        },
        {
            "name": "username",
            "type": "string",
            "bindable": true
        },
        {
            "name": "withCredentials",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "xmlData",
            "type": "object",
            "bindable": true
        }
    ]
});
