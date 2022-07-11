xds.component.Registry.addDefinition({
    "type": "Ext.util.DelimitedValue",
    "className": "Ext.util.DelimitedValue",
    "inherits": "Ext.Base",
    "autoName": "MyDelimitedValue",
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "defaultValue": "C"
        },
        {
            "name": "delimiter",
            "type": "string",
            "defaultValue": "\\t"
        },
        {
            "name": "lineBreak",
            "type": "string",
            "defaultValue": "\\n"
        },
        {
            "name": "quote",
            "type": "string",
            "defaultValue": "\""
        }
    ]
});
