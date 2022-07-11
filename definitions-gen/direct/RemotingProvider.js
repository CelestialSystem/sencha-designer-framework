xds.component.Registry.addDefinition({
    "type": "Ext.direct.RemotingProvider",
    "className": "Ext.direct.RemotingProvider",
    "classAlias": "direct.remotingprovider",
    "inherits": "Ext.direct.JsonProvider",
    "autoName": "MyRemotingProvider",
    "cfgs": [
        {
            "name": "actions",
            "type": "object"
        },
        {
            "name": "bufferLimit",
            "type": "number",
            "defaultValue": 1.7976931348623157e+308
        },
        {
            "name": "disableNestedActions",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "enableBuffer",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 10
        },
        {
            "name": "enableUrlEncode",
            "type": "string",
            "defaultValue": "data"
        },
        {
            "name": "maxRetries",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "namespace",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "timeout",
            "type": "number"
        },
        {
            "name": "url",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "beforecall",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.RemotingProvider",
                    "optional": true
                },
                {
                    "name": "transaction",
                    "type": "Ext.direct.Transaction",
                    "optional": true
                },
                {
                    "name": "meta",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "beforecallback",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.RemotingProvider",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.direct.Event",
                    "optional": true
                },
                {
                    "name": "transaction",
                    "type": "Ext.direct.Transaction",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "call",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.RemotingProvider",
                    "optional": true
                },
                {
                    "name": "transaction",
                    "type": "Ext.direct.Transaction",
                    "optional": true
                },
                {
                    "name": "meta",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
