xds.component.Registry.addDefinition({
    "type": "Ext.data.Model",
    "className": "Ext.data.Model",
    "inherits": "Ext.Base",
    "autoName": "MyModel",
    "typeAlias": [
        "Ext.data.Record"
    ],
    "cfgs": [
        {
            "name": "belongsTo",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "clientIdProperty",
            "type": "string"
        },
        {
            "name": "convertOnSet",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "fields",
            "type": "array",
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "hasMany",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "hasOne",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "identifier",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "idProperty",
            "type": "string",
            "defaultValue": "id"
        },
        {
            "name": "manyToMany",
            "type": "object"
        },
        {
            "name": "proxy",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "schema",
            "type": "string",
            "defaultValue": "default",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "summary",
            "type": "object"
        },
        {
            "name": "validationSeparator",
            "type": "string"
        },
        {
            "name": "validators",
            "type": "array"
        },
        {
            "name": "versionProperty",
            "type": "string"
        }
    ]
});
