xds.component.Registry.addDefinition({
    "type": "Ext.field.Email",
    "className": "Ext.field.Email",
    "classAlias": "widget.emailfield",
    "inherits": "Ext.field.Text",
    "autoName": "MyEmail",
    "typeAlias": [
        "Ext.form.Email"
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
            "defaultValue": "email",
            "bindable": true
        }
    ]
});
