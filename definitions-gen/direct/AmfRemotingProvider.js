xds.component.Registry.addDefinition({
    "type": "Ext.direct.AmfRemotingProvider",
    "className": "Ext.direct.AmfRemotingProvider",
    "autoName": "MyAmfRemotingProvider",
    "cfgs": [
        {
            "name": "actions",
            "type": "object"
        },
        {
            "name": "binary",
            "type": "string",
            "defaultValue": false
        },
        {
            "name": "enableUrlEncode",
            "type": "string"
        },
        {
            "name": "endpoint",
            "type": "string"
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
                    "type": "Ext.direct.AmfRemotingProvider",
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
            "name": "call",
            "params": [
                {
                    "name": "provider",
                    "type": "Ext.direct.AmfRemotingProvider",
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
