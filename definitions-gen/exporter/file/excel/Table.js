xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Table",
    "className": "Ext.exporter.file.excel.Table",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyTable",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "defaultColumnWidth",
            "type": "number",
            "defaultValue": 48,
            "bindable": true
        },
        {
            "name": "defaultRowHeight",
            "type": "number",
            "defaultValue": 12.75,
            "bindable": true
        },
        {
            "name": "leftCell",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "rows",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "styleId",
            "type": "string",
            "bindable": true
        },
        {
            "name": "topCell",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        }
    ]
});
