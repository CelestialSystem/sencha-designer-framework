xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.Excel",
    "className": "Ext.exporter.file.ooxml.Excel",
    "inherits": "Ext.exporter.file.ooxml.XmlRels",
    "autoName": "MyExcel",
    "cfgs": [
        {
            "name": "properties",
            "type": "object",
            "bindable": true
        },
        {
            "name": "workbook",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        }
    ]
});
