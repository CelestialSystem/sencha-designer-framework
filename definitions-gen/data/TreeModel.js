xds.component.Registry.addDefinition({
    "type": "Ext.data.TreeModel",
    "className": "Ext.data.TreeModel",
    "inherits": "Ext.data.Model",
    "mixin": [
        "Ext.mixin.Queryable"
    ],
    "autoName": "MyTreeModel",
    "cfgs": [
        {
            "name": "childType",
            "type": "string"
        }
    ]
});
