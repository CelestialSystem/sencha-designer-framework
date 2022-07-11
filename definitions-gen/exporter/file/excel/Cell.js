xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Cell",
    "className": "Ext.exporter.file.excel.Cell",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyCell",
    "cfgs": [
        {
            "name": "dataType",
            "type": "string",
            "bindable": true
        },
        {
            "name": "formula",
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
