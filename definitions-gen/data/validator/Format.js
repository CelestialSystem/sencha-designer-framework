xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Format",
    "className": "Ext.data.validator.Format",
    "classAlias": "data.validator.format",
    "inherits": "Ext.data.validator.Validator",
    "autoName": "MyFormat",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "defaultValue": "undefined",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is in the wrong format",
            "bindable": true
        }
    ]
});
