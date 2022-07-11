xds.component.Registry.addDefinition({
    "type": "Ext.direct.PollingProvider",
    "className": "Ext.direct.PollingProvider",
    "classAlias": "direct.pollingprovider",
    "inherits": "Ext.direct.JsonProvider",
    "autoName": "MyPollingProvider",
    "cfgs": [
        {
            "name": "baseParams",
            "type": "object"
        },
        {
            "name": "interval",
            "type": "number",
            "defaultValue": 3000
        },
        {
            "name": "pollFn",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "timeout",
            "type": "number"
        }
    ],
    "eventDefs": [
        {
            "name": "beforepoll",
            "params": [
                {
                    "name": "pollingprovider",
                    "type": "Ext.direct.PollingProvider",
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
            "name": "poll",
            "params": [
                {
                    "name": "pollingprovider",
                    "type": "Ext.direct.PollingProvider",
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
