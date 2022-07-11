xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.Exclusion",
    "className": "Ext.data.validator.Exclusion",
    "classAlias": "data.validator.exclusion",
    "inherits": "Ext.data.validator.List",
    "autoName": "MyExclusion",
    "cfgs": [
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is a value that has been excluded"
        }
    ]
});
