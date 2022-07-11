xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Worksheet",
    "className": "Ext.exporter.file.excel.Worksheet",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyWorksheet",
    "cfgs": [
        {
            "name": "name",
            "type": "string",
            "defaultValue": "Sheet",
            "bindable": true
        },
        {
            "name": "protection",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "rightToLeft",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "showGridLines",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "tables",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        }
    ]
});
