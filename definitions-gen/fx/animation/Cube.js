xds.component.Registry.addDefinition({
    "type": "Ext.fx.animation.Cube",
    "className": "Ext.fx.animation.Cube",
    "classAlias": "animation.cube",
    "inherits": "Ext.fx.animation.Abstract",
    "autoName": "MyCube",
    "cfgs": [
        {
            "name": "before",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "right",
            "bindable": true
        }
    ]
});
