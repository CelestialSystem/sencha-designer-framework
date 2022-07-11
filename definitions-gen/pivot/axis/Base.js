xds.component.Registry.addDefinition({
    "type": "Ext.pivot.axis.Base",
    "className": "Ext.pivot.axis.Base",
    "classAlias": "pivotaxis.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "typeAlias": [
        "Mz.aggregate.axis.Abstract"
    ],
    "cfgs": [
        {
            "name": "dimensions",
            "type": "array"
        }
    ]
});
