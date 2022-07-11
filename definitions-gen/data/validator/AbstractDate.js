xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.AbstractDate",
    "className": "Ext.data.validator.AbstractDate",
    "inherits": "Ext.data.validator.Validator",
    "autoName": "MyAbstractDate",
    "cfgs": [
        {
            "name": "format",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "bindable": true
        }
    ]
});
