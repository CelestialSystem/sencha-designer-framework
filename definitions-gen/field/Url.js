xds.component.Registry.addDefinition({
    "type": "Ext.field.Url",
    "className": "Ext.field.Url",
    "classAlias": "widget.urlfield",
    "inherits": "Ext.field.Text",
    "autoName": "MyUrl",
    "typeAlias": [
        "Ext.form.Url"
    ],
    "cfgs": [
        {
            "name": "autoCapitalize",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "url",
            "bindable": true
        }
    ]
});
