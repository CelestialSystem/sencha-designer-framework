xds.component.Registry.addDefinition({
    "type": "Ext.draw.gradient.Radial",
    "className": "Ext.draw.gradient.Radial",
    "inherits": "Ext.draw.gradient.Gradient",
    "autoName": "MyRadial",
    "cfgs": [
        {
            "name": "end",
            "type": "object",
            "defaultValue": {
                "x": 0,
                "y": 0,
                "r": 1
            },
            "bindable": true
        },
        {
            "name": "start",
            "type": "object",
            "defaultValue": {
                "x": 0,
                "y": 0,
                "r": 0
            },
            "bindable": true
        }
    ]
});
