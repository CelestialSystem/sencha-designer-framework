xds.component.Registry.addDefinition({
    "type": "Ext.fx.animation.Fade",
    "className": "Ext.fx.animation.Fade",
    "classAlias": "animation.fade",
    "inherits": "Ext.fx.animation.Abstract",
    "autoName": "MyFade",
    "typeAlias": [
        "Ext.fx.animation.FadeIn"
    ],
    "cfgs": [
        {
            "name": "out",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
