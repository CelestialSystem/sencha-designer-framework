xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Currency",
    "className": "Ext.data.validator.Currency",
    "classAlias": "data.validator.currency",
    "inherits": "Ext.data.validator.Number",
    "autoName": "MyCurrency",
    "cfgs": [
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid currency amount",
            "bindable": true
        },
        {
            "name": "spacer",
            "type": "string",
            "bindable": true
        },
        {
            "name": "symbol",
            "type": "string",
            "bindable": true
        },
        {
            "name": "symbolAtEnd",
            "type": "boolean",
            "bindable": true
        }
    ]
});
