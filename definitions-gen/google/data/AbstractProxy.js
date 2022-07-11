xds.component.Registry.addDefinition({
    "type": "Ext.google.data.AbstractProxy",
    "className": "Ext.google.data.AbstractProxy",
    "inherits": "Ext.data.proxy.Server",
    "mixin": [
        "Ext.google.ux.Client"
    ],
    "autoName": "MyAbstractProxy",
    "cfgs": [
        {
            "name": "batchActions",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "reader",
            "type": "object",
            "defaultValue": {
                "type": "json",
                "rootProperty": "items",
                "messageProperty": "error"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
