xds.component.Registry.addDefinition({
    "type": "Ext.draw.gradient.Linear",
    "className": "Ext.draw.gradient.Linear",
    "inherits": "Ext.draw.gradient.Gradient",
    "autoName": "MyLinear",
    "cfgs": [
        {
            "name": "degrees",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "radians",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
