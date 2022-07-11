xds.component.Registry.addDefinition({
    "type": "Ext.fx.animation.Wipe",
    "className": "Ext.fx.animation.Wipe",
    "inherits": "Ext.fx.Animation",
    "autoName": "MyWipe",
    "typeAlias": [
        "Ext.fx.animation.WipeIn"
    ],
    "cfgs": [
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "right",
            "bindable": true
        },
        {
            "name": "easing",
            "type": "string",
            "defaultValue": "ease-out",
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
