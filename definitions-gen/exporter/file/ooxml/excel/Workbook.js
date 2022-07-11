xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.Workbook",
    "className": "Ext.exporter.file.ooxml.excel.Workbook",
    "inherits": "Ext.exporter.file.ooxml.XmlRels",
    "autoName": "MyWorkbook",
    "cfgs": [
        {
            "name": "pivotCaches",
            "type": "array",
            "bindable": true
        },
        {
            "name": "sharedStrings",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "sheets",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "stylesheet",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "theme",
            "type": "object",
            "defaultValue": {
                "type": "office",
                "folder": "/xl/theme/",
                "index": 1
            },
            "bindable": true
        }
    ]
});
