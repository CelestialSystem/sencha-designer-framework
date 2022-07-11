xds.component.Registry.addDefinition({
    "type": "Ext.fx.easing.BoundMomentum",
    "className": "Ext.fx.easing.BoundMomentum",
    "inherits": "Ext.fx.easing.Abstract",
    "autoName": "MyBoundMomentum",
    "cfgs": [
        {
            "name": "bounce",
            "type": "object",
            "bindable": true
        },
        {
            "name": "minVelocity",
            "type": "number",
            "defaultValue": 0.01,
            "bindable": true
        },
        {
            "name": "momentum",
            "type": "object",
            "bindable": true
        },
        {
            "name": "startVelocity",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
