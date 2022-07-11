xds.component.Registry.addDefinition({
    "type": "Ext.data.writer.Json",
    "className": "Ext.data.writer.Json",
    "classAlias": "writer.json",
    "inherits": "Ext.data.writer.Writer",
    "autoName": "MyJson",
    "typeAlias": [
        "Ext.data.JsonWriter"
    ],
    "cfgs": [
        {
            "name": "allowSingle",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "encode",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "expandData",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "rootProperty",
            "type": "string",
            "bindable": true
        }
    ]
});
