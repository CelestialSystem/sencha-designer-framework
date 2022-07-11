xds.component.Registry.addDefinition({
    "type": "Ext.data.writer.Xml",
    "className": "Ext.data.writer.Xml",
    "classAlias": "writer.xml",
    "inherits": "Ext.data.writer.Writer",
    "autoName": "MyXml",
    "typeAlias": [
        "Ext.data.XmlWriter"
    ],
    "cfgs": [
        {
            "name": "defaultDocumentRoot",
            "type": "string",
            "defaultValue": "xmlData",
            "bindable": true
        },
        {
            "name": "documentRoot",
            "type": "string",
            "defaultValue": "xmlData",
            "bindable": true
        },
        {
            "name": "header",
            "type": "string",
            "bindable": true
        },
        {
            "name": "record",
            "type": "string",
            "defaultValue": "record",
            "bindable": true
        }
    ]
});
