xds.component.Registry.addDefinition({
    "type": "Ext.data.field.Date",
    "className": "Ext.data.field.Date",
    "classAlias": "data.field.date",
    "inherits": "Ext.data.field.Field",
    "autoName": "MyDate",
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string"
        },
        {
            "name": "dateReadFormat",
            "type": "string"
        },
        {
            "name": "dateWriteFormat",
            "type": "string"
        },
        {
            "name": "useStrict",
            "type": "boolean"
        }
    ]
});
