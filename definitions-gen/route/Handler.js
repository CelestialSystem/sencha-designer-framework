xds.component.Registry.addDefinition({
    "type": "Ext.route.Handler",
    "className": "Ext.route.Handler",
    "inherits": "Ext.Base",
    "autoName": "MyHandler",
    "cfgs": [
        {
            "name": "action",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "before",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "exit",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "lazy",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "single",
            "type": "boolean"
        }
    ]
});
