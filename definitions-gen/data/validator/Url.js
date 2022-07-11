xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Url",
    "className": "Ext.data.validator.Url",
    "classAlias": "data.validator.url",
    "inherits": "Ext.data.validator.Format",
    "autoName": "MyUrl",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid URL",
            "bindable": true
        }
    ]
});
