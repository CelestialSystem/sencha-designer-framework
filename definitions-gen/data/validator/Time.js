xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Time",
    "className": "Ext.data.validator.Time",
    "classAlias": "data.validator.time",
    "inherits": "Ext.data.validator.AbstractDate",
    "autoName": "MyTime",
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
            "defaultValue": "Is not a valid time",
            "bindable": true
        }
    ]
});
