xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Bound",
    "className": "Ext.data.validator.Bound",
    "classAlias": "data.validator.bound",
    "inherits": "Ext.data.validator.Validator",
    "autoName": "MyBound",
    "cfgs": [
        {
            "name": "bothMessage",
            "type": "string",
            "defaultValue": "Value must be between {0} and {1}",
            "bindable": true
        },
        {
            "name": "emptyMessage",
            "type": "string",
            "defaultValue": "Must be present",
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
            "defaultValue": "Value must be less than {0}",
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
            "defaultValue": "Value must be greater than {0}",
            "bindable": true
        }
    ]
});
