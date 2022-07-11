xds.component.Registry.addDefinition({
    "type": "Ext.data.schema.Schema",
    "className": "Ext.data.schema.Schema",
    "classAlias": "schema.default",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MySchema",
    "cfgs": [
        {
            "name": "defaultIdentifier",
            "type": "object",
            "bindable": true
        },
        {
            "name": "namer",
            "type": "string",
            "defaultValue": "default",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "namespace",
            "type": "string",
            "bindable": true
        },
        {
            "name": "proxy",
            "type": "object",
            "defaultValue": {
                "type": "ajax",
                "url": "{prefix}/{entityName}"
            },
            "bindable": true
        },
        {
            "name": "urlPrefix",
            "type": "string",
            "bindable": true
        }
    ]
});
