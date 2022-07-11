xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Workbook",
    "className": "Ext.exporter.file.excel.Workbook",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyWorkbook",
    "cfgs": [
        {
            "name": "author",
            "type": "string",
            "defaultValue": "Sencha",
            "bindable": true
        },
        {
            "name": "protectStructure",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "protectWindows",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "styles",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "defaultValue": "Workbook",
            "bindable": true
        },
        {
            "name": "windowHeight",
            "type": "number",
            "defaultValue": 9000,
            "bindable": true
        },
        {
            "name": "windowWidth",
            "type": "number",
            "defaultValue": 50000,
            "bindable": true
        },
        {
            "name": "worksheets",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        }
    ]
});
