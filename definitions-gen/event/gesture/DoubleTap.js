xds.component.Registry.addDefinition({
    "type": "Ext.event.gesture.DoubleTap",
    "className": "Ext.event.gesture.DoubleTap",
    "inherits": "Ext.event.gesture.SingleTouch",
    "autoName": "MyDoubleTap",
    "cfgs": [
        {
            "name": "moveDistance",
            "type": "number",
            "defaultValue": 8,
            "bindable": true
        },
        {
            "name": "tapDistance",
            "type": "number",
            "defaultValue": 24,
            "bindable": true
        }
    ]
});
