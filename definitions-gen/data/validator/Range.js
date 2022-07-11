xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Range",
    "className": "Ext.data.validator.Range",
    "classAlias": "data.validator.range",
    "inherits": "Ext.data.validator.Bound",
    "autoName": "MyRange",
    "cfgs": [
        {
            "name": "bothMessage",
            "type": "string",
            "defaultValue": "Must be between {0} and {1}",
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
            "defaultValue": "Must be no more than than {0}",
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
            "defaultValue": "Must be at least {0}",
            "bindable": true
        },
        {
            "name": "nanMessage",
            "type": "string",
            "defaultValue": "Must be numeric",
            "bindable": true
        }
    ]
});
