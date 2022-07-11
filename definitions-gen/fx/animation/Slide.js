xds.component.Registry.addDefinition({
    "type": "Ext.fx.animation.Slide",
    "className": "Ext.fx.animation.Slide",
    "classAlias": "animation.slide",
    "inherits": "Ext.fx.animation.Abstract",
    "autoName": "MySlide",
    "typeAlias": [
        "Ext.fx.animation.SlideIn"
    ],
    "cfgs": [
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "easing",
            "type": "string",
            "defaultValue": "auto",
            "bindable": true
        },
        {
            "name": "offset",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "out",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
