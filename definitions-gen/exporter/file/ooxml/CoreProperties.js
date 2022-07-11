xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.CoreProperties",
    "className": "Ext.exporter.file.ooxml.CoreProperties",
    "inherits": "Ext.exporter.file.ooxml.Xml",
    "autoName": "MyCoreProperties",
    "cfgs": [
        {
            "name": "author",
            "type": "string",
            "defaultValue": "Sencha",
            "bindable": true
        },
        {
            "name": "subject",
            "type": "string",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "defaultValue": "Workbook",
            "bindable": true
        }
    ]
});
