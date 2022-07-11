xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Email",
    "className": "Ext.data.validator.Email",
    "classAlias": "data.validator.email",
    "inherits": "Ext.data.validator.Format",
    "autoName": "MyEmail",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid email address",
            "bindable": true
        }
    ]
});
