xds.component.Registry.addDefinition({
    "type": "Ext.field.Password",
    "className": "Ext.field.Password",
    "classAlias": "widget.passwordfield",
    "inherits": "Ext.field.Text",
    "autoName": "MyPassword",
    "typeAlias": [
        "Ext.form.Password"
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
            "defaultValue": "password",
            "bindable": true
        },
        {
            "name": "revealable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "revealed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
