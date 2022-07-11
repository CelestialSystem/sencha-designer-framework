xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.DateTime",
    "className": "Ext.data.validator.DateTime",
    "classAlias": "data.validator.datetime",
    "inherits": "Ext.data.validator.AbstractDate",
    "autoName": "MyDateTime",
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
            "defaultValue": "Is not a valid date and time",
            "bindable": true
        }
    ]
});
