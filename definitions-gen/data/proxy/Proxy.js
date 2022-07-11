xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Proxy",
    "className": "Ext.data.proxy.Proxy",
    "classAlias": "proxy.proxy",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable",
        "Ext.mixin.Observable"
    ],
    "autoName": "MyProxy",
    "typeAlias": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
    ],
    "cfgs": [
        {
            "name": "batchActions",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "batchOrder",
            "type": "string",
            "defaultValue": "create,update,destroy",
            "bindable": true
        },
        {
            "name": "model",
            "type": "string",
            "bindable": true
        },
        {
            "name": "reader",
            "type": "object",
            "defaultValue": {
                "type": "json"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "writer",
            "type": "object",
            "defaultValue": {
                "type": "json"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "metachange",
            "params": [
                {
                    "name": "proxy",
                    "type": "Ext.data.proxy.Proxy",
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
