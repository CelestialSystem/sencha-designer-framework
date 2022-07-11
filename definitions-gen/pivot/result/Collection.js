xds.component.Registry.addDefinition({
    "type": "Ext.pivot.result.Collection",
    "className": "Ext.pivot.result.Collection",
    "inherits": "Ext.Base",
    "autoName": "MyCollection",
    "typeAlias": [
        "Mz.aggregate.matrix.Results"
    ],
    "cfgs": [
        {
            "name": "matrix",
            "type": "object"
        },
        {
            "name": "resultType",
            "type": "string",
            "defaultValue": "base"
        }
    ]
});
