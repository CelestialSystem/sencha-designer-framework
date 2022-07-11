xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Presence",
    "className": "Ext.data.validator.Presence",
    "classAlias": "data.validator.presence",
    "inherits": "Ext.data.validator.Validator",
    "autoName": "MyPresence",
    "cfgs": [
        {
            "name": "allowEmpty",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Must be present",
            "bindable": true
        }
    ]
});
