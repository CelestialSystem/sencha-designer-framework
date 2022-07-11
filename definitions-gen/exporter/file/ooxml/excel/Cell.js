xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Cell",
    "className": "Ext.exporter.file.ooxml.excel.Cell",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyCell",
    "cfgs": [
        {
            "name": "dataType",
            "type": "string",
            "bindable": true
        },
        {
            "name": "index",
            "type": "number",
            "bindable": true
        },
        {
            "name": "mergeAcross",
            "type": "number",
            "bindable": true
        },
        {
            "name": "mergeDown",
            "type": "number",
            "bindable": true
        },
        {
            "name": "row",
            "type": "object",
            "bindable": true
        },
        {
            "name": "serializeDateToNumber",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showPhonetic",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "styleId",
            "type": "string",
            "bindable": true
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "date"
                },
                {
                    "type": "string"
                }
            ]
        }
    ]
});
