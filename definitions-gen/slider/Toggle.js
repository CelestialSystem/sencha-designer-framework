xds.component.Registry.addDefinition({
    "type": "Ext.slider.Toggle",
    "className": "Ext.slider.Toggle",
    "classAlias": "widget.toggleslider",
    "inherits": "Ext.slider.Slider",
    "autoName": "MyToggle",
    "cfgs": [
        {
            "name": "value",
            "type": "number",
            "defaultValue": 0,
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        }
    ]
});
