xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Length",
    "className": "Ext.data.validator.Length",
    "classAlias": "data.validator.length",
    "inherits": "Ext.data.validator.Bound",
    "autoName": "MyLength",
    "cfgs": [
        {
            "name": "bothMessage",
            "type": "string",
            "defaultValue": "Length must be between {0} and {1}",
            "bindable": true
        },
        {
            "name": "max",
            "type": "number",
            "bindable": true
        },
        {
            "name": "maxOnlyMessage",
            "type": "string",
            "defaultValue": "Length must be no more than {0}",
            "bindable": true
        },
        {
            "name": "min",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minOnlyMessage",
            "type": "string",
            "defaultValue": "Length must be at least {0}",
            "bindable": true
        }
    ]
});
