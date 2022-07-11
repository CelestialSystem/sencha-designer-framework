xds.component.Registry.addDefinition({
    "type": "Ext.pivot.axis.Item",
    "className": "Ext.pivot.axis.Item",
    "inherits": "Ext.Base",
    "autoName": "MyItem",
    "typeAlias": [
        "Mz.aggregate.axis.Item"
    ],
    "cfgs": [
        {
            "name": "id",
            "type": "string"
        },
        {
            "name": "key",
            "type": "string"
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "sortValue",
            "type": "auto"
        },
        {
            "name": "value",
            "type": "auto"
        }
    ]
});
