xds.component.Registry.addDefinition({
    "type": "Ext.data.field.Field",
    "className": "Ext.data.field.Field",
    "classAlias": "data.field.auto",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyField",
    "typeAlias": [
        "Ext.data.Field"
    ],
    "cfgs": [
        {
            "name": "allowNull",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "calculate",
            "type": "function",
            "params": [
                {
                    "name": "data",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "convert",
            "type": "function"
        },
        {
            "name": "critical",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "defaultValue",
            "type": "object"
        },
        {
            "name": "depends",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "mapping",
            "type": "string",
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "persist",
            "type": "boolean"
        },
        {
            "name": "reference",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "serialize",
            "type": "object"
        },
        {
            "name": "sortType",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "summary",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "unique",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "validators",
            "type": "array"
        }
    ]
});
