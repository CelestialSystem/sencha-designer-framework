xds.component.Registry.addDefinition({
    "type": "Ext.draw.modifier.Animation",
    "className": "Ext.draw.modifier.Animation",
    "classAlias": "modifier.animation",
    "inherits": "Ext.draw.modifier.Modifier",
    "autoName": "MyAnimation",
    "cfgs": [
        {
            "name": "customDurations",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "customEasings",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "duration",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "easing",
            "type": "function",
            "bindable": true
        }
    ]
});
