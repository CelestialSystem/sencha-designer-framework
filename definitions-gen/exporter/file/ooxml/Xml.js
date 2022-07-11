xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.Xml",
    "className": "Ext.exporter.file.ooxml.Xml",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MyXml",
    "cfgs": [
        {
            "name": "contentType",
            "type": "object",
            "bindable": true
        },
        {
            "name": "fileName",
            "type": "string",
            "bindable": true
        },
        {
            "name": "fileNameTemplate",
            "type": "string",
            "defaultValue": "{fileName}.xml",
            "bindable": true
        },
        {
            "name": "folder",
            "type": "string",
            "bindable": true
        },
        {
            "name": "path",
            "type": "string",
            "bindable": true
        },
        {
            "name": "relationship",
            "type": "object",
            "bindable": true
        }
    ]
});
