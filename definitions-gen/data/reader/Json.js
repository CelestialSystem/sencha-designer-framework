xds.component.Registry.addDefinition({
    "type": "Ext.data.reader.Json",
    "className": "Ext.data.reader.Json",
    "classAlias": "reader.json",
    "inherits": "Ext.data.reader.Reader",
    "autoName": "MyJson",
    "typeAlias": [
        "Ext.data.JsonReader"
    ],
    "cfgs": [
        {
            "name": "metaProperty",
            "type": "string",
            "defaultValue": "metaData",
            "bindable": true
        },
        {
            "name": "preserveRawData",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "record",
            "type": "string",
            "bindable": true
        },
        {
            "name": "useSimpleAccessors",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
