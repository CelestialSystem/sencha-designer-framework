xds.component.Registry.addDefinition({
    "type": "Ext.data.identifier.Sequential",
    "className": "Ext.data.identifier.Sequential",
    "classAlias": "data.identifier.sequential",
    "inherits": "Ext.data.identifier.Generator",
    "autoName": "MySequential",
    "cfgs": [
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "prefix",
            "type": "string",
            "bindable": true
        },
        {
            "name": "seed",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        }
    ]
});
