xds.component.Registry.addDefinition({
    "type": "Ext.data.identifier.Generator",
    "className": "Ext.data.identifier.Generator",
    "classAlias": "data.identifier.default",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyGenerator",
    "cfgs": [
        {
            "name": "id",
            "type": "string",
            "bindable": true
        }
    ]
});
