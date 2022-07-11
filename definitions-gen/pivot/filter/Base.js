xds.component.Registry.addDefinition({
    "type": "Ext.pivot.filter.Base",
    "className": "Ext.pivot.filter.Base",
    "classAlias": "pivotfilter.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "typeAlias": [
        "Mz.aggregate.filter.Abstract"
    ],
    "cfgs": [
        {
            "name": "caseSensitive",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "operator",
            "type": "string"
        },
        {
            "name": "type",
            "type": "string"
        },
        {
            "name": "value",
            "type": "string",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
