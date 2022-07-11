xds.component.Registry.addDefinition({
    "type": "Ext.data.writer.Writer",
    "className": "Ext.data.writer.Writer",
    "classAlias": "writer.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyWriter",
    "typeAlias": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
    ],
    "cfgs": [
        {
            "name": "allDataOptions",
            "type": "object",
            "defaultValue": {
                "persist": true
            },
            "bindable": true
        },
        {
            "name": "clientIdProperty",
            "type": "string",
            "bindable": true
        },
        {
            "name": "dateFormat",
            "type": "string",
            "bindable": true
        },
        {
            "name": "nameProperty",
            "type": "string",
            "defaultValue": "name",
            "bindable": true
        },
        {
            "name": "partialDataOptions",
            "type": "object",
            "defaultValue": {
                "changes": true,
                "critical": true
            },
            "bindable": true
        },
        {
            "name": "transform",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "writeAllFields",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "writeRecordId",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
