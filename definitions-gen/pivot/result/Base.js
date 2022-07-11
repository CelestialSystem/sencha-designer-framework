xds.component.Registry.addDefinition({
    "type": "Ext.pivot.result.Base",
    "className": "Ext.pivot.result.Base",
    "classAlias": "pivotresult.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "leftKey",
            "type": "string"
        },
        {
            "name": "topKey",
            "type": "string"
        }
    ]
});
