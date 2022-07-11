xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.configurator.FieldSettings",
    "className": "Ext.pivot.plugin.configurator.FieldSettings",
    "inherits": "Ext.Base",
    "autoName": "MyFieldSettings",
    "cfgs": [
        {
            "name": "aggregators",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "sum",
                "avg",
                "min",
                "max",
                "count",
                "countNumbers",
                "groupSumPercentage",
                "groupCountPercentage",
                "variance",
                "varianceP",
                "stdDev",
                "stdDevP"
            ],
            "bindable": true
        },
        {
            "name": "allowed",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "leftAxis",
                "topAxis",
                "aggregate"
            ],
            "bindable": true
        },
        {
            "name": "cls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "fixed",
            "type": "string",
            "defaultValue": [],
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "formatters",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "renderers",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "style",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ]
});
