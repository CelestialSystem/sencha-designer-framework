xds.component.Registry.addDefinition({
    "type": "Ext.data.virtual.Range",
    "className": "Ext.data.virtual.Range",
    "inherits": "Ext.data.Range",
    "autoName": "MyRange",
    "cfgs": [
        {
            "name": "callback",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "leadingBufferZone",
            "type": "number"
        },
        {
            "name": "prefetch",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "trailingBufferZone",
            "type": "number"
        }
    ]
});
