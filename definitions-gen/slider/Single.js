xds.component.Registry.addDefinition({
    "type": "Ext.slider.Single",
    "className": "Ext.slider.Single",
    "classAlias": "widget.slider",
    "inherits": "Ext.slider.Multi",
    "autoName": "MySingle",
    "typeAlias": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
    ],
    "cfgs": [
        {
            "name": "publishOnComplete",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
