xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.XmlRels",
    "className": "Ext.exporter.file.ooxml.XmlRels",
    "inherits": "Ext.exporter.file.ooxml.Xml",
    "autoName": "MyXmlRels",
    "cfgs": [
        {
            "name": "index",
            "type": "number",
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "nameTemplate",
            "type": "string",
            "defaultValue": "{name}",
            "bindable": true
        }
    ]
});
