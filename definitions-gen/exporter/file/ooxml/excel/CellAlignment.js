xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.CellAlignment",
    "className": "Ext.exporter.file.ooxml.excel.CellAlignment",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyCellAlignment",
    "cfgs": [
        {
            "name": "horizontal",
            "type": "string",
            "defaultValue": "general",
            "bindable": true
        },
        {
            "name": "readingOrder",
            "type": "number",
            "bindable": true
        },
        {
            "name": "vertical",
            "type": "string",
            "defaultValue": "top",
            "bindable": true
        }
    ]
});
