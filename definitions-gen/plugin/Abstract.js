xds.component.Registry.addDefinition({
    "type": "Ext.plugin.Abstract",
    "className": "Ext.plugin.Abstract",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyAbstract",
    "typeAlias": [
        "Ext.AbstractPlugin"
    ],
    "cfgs": [
        {
            "name": "id",
            "type": "string"
        }
    ]
});
