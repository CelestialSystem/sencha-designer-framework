xds.component.Registry.addDefinition({
    "type": "Ext.data.reader.Xml",
    "className": "Ext.data.reader.Xml",
    "classAlias": "reader.xml",
    "inherits": "Ext.data.reader.Reader",
    "autoName": "MyXml",
    "typeAlias": [
        "Ext.data.XmlReader"
    ],
    "cfgs": [
        {
            "name": "namespace",
            "type": "string",
            "bindable": true
        },
        {
            "name": "record",
            "type": "string",
            "bindable": true
        }
    ]
});
