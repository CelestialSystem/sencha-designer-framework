xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Direct",
    "className": "Ext.data.proxy.Direct",
    "classAlias": "proxy.direct",
    "inherits": "Ext.data.proxy.Server",
    "autoName": "MyDirect",
    "typeAlias": [
        "Ext.data.DirectProxy"
    ],
    "cfgs": [
        {
            "name": "api",
            "type": "object",
            "bindable": true
        },
        {
            "name": "directFn",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "metadata",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "paramOrder",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "paramsAsHash",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "url",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
