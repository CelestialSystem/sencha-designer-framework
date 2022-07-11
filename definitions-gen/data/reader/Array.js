xds.component.Registry.addDefinition({
    "type": "Ext.data.reader.Array",
    "className": "Ext.data.reader.Array",
    "classAlias": "reader.array",
    "inherits": "Ext.data.reader.Json",
    "autoName": "MyArray",
    "typeAlias": [
        "Ext.data.ArrayReader"
    ],
    "cfgs": [
        {
            "name": "preserveRawData",
            "type": "boolean",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "successProperty",
            "type": "string",
            "bindable": true
        },
        {
            "name": "totalProperty",
            "type": "string",
            "bindable": true
        }
    ]
});
