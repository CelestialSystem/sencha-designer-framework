xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.WorksheetSource",
    "className": "Ext.exporter.file.ooxml.excel.WorksheetSource",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyWorksheetSource",
    "cfgs": [
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "ref",
            "type": "string",
            "bindable": true
        },
        {
            "name": "sheet",
            "type": "string",
            "bindable": true
        }
    ]
});
