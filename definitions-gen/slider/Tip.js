xds.component.Registry.addDefinition({
    "type": "Ext.slider.Tip",
    "className": "Ext.slider.Tip",
    "classAlias": "widget.slidertip",
    "inherits": "Ext.tip.Tip",
    "autoName": "MyTip",
    "cfgs": [
        {
            "name": "align",
            "type": "string"
        },
        {
            "name": "offsets",
            "type": "array"
        },
        {
            "name": "position",
            "type": "string",
            "defaultValue": "For horizontal sliders, \"top\", for vertical sliders, \"left\"",
            "bindable": true
        }
    ]
});
