xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Number",
    "className": "Ext.data.validator.Number",
    "classAlias": "data.validator.number",
    "inherits": "Ext.data.validator.Validator",
    "autoName": "MyNumber",
    "cfgs": [
        {
            "name": "decimalSeparator",
            "type": "string",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid number",
            "bindable": true
        },
        {
            "name": "thousandSeparator",
            "type": "string",
            "bindable": true
        }
    ]
});
