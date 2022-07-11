xds.component.Registry.addDefinition({
    "type": "Ext.field.File",
    "className": "Ext.field.File",
    "classAlias": "widget.filefield",
    "inherits": "Ext.field.Text",
    "mixin": [
        "Ext.mixin.ConfigProxy"
    ],
    "autoName": "MyFile",
    "cfgs": [
        {
            "name": "accept",
            "type": "string"
        },
        {
            "name": "capture",
            "type": "string"
        },
        {
            "name": "multiple",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
