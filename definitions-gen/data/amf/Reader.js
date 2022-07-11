xds.component.Registry.addDefinition({
    "type": "Ext.data.amf.Reader",
    "className": "Ext.data.amf.Reader",
    "classAlias": "reader.amf",
    "inherits": "Ext.data.reader.Json",
    "autoName": "MyReader",
    "cfgs": [
        {
            "name": "messageIndex",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
