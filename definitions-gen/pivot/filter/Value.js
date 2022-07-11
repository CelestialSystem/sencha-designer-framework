xds.component.Registry.addDefinition({
    "type": "Ext.pivot.filter.Value",
    "className": "Ext.pivot.filter.Value",
    "classAlias": "pivotfilter.value",
    "inherits": "Ext.pivot.filter.Base",
    "autoName": "MyValue",
    "typeAlias": [
        "Mz.aggregate.filter.Value"
    ],
    "cfgs": [
        {
            "name": "dimensionId",
            "type": "string"
        },
        {
            "name": "operator",
            "type": "string"
        },
        {
            "name": "topOrder",
            "type": "string",
            "defaultValue": "top"
        },
        {
            "name": "topSort",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "topType",
            "type": "string",
            "defaultValue": "items"
        }
    ]
});
