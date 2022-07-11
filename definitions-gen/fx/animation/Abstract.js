xds.component.Registry.addDefinition({
    "type": "Ext.fx.animation.Abstract",
    "className": "Ext.fx.animation.Abstract",
    "inherits": "Ext.Evented",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyAbstract",
    "cfgs": [
        {
            "name": "before",
            "type": "object",
            "bindable": true
        },
        {
            "name": "easing",
            "type": "string",
            "defaultValue": "linear",
            "bindable": true
        }
    ]
});
