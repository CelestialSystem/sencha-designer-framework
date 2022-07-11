xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Inclusion",
    "className": "Ext.data.validator.Inclusion",
    "classAlias": "data.validator.inclusion",
    "inherits": "Ext.data.validator.List",
    "autoName": "MyInclusion",
    "cfgs": [
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not in the list of acceptable values"
        }
    ]
});
