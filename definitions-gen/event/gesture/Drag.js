xds.component.Registry.addDefinition({
    "type": "Ext.event.gesture.Drag",
    "className": "Ext.event.gesture.Drag",
    "inherits": "Ext.event.gesture.SingleTouch",
    "autoName": "MyDrag",
    "cfgs": [
        {
            "name": "minDistance",
            "type": "number",
            "defaultValue": 8,
            "bindable": true
        }
    ]
});
