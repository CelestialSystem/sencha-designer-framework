xds.component.Registry.addDefinition({
    "type": "Ext.draw.modifier.Modifier",
    "className": "Ext.draw.modifier.Modifier",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyModifier",
    "cfgs": [
        {
            "name": "sprite",
            "type": "object",
            "bindable": true
        }
    ]
});
