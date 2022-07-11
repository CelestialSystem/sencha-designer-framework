xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Date",
    "className": "Ext.data.validator.Date",
    "classAlias": "data.validator.date",
    "inherits": "Ext.data.validator.AbstractDate",
    "autoName": "MyDate",
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
            "defaultValue": "Is not a valid date",
            "bindable": true
        }
    ]
});
