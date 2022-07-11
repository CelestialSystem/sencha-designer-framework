xds.component.Registry.addDefinition({
    "type": "Ext.slider.Widget",
    "className": "Ext.slider.Widget",
    "classAlias": "widget.sliderwidget",
    "inherits": "Ext.Widget",
    "autoName": "MyWidget",
    "cfgs": [
        {
            "name": "clickToChange",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "maxValue",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "minValue",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "publishOnComplete",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "object",
            "defaultValue": {
                "value": 1
            },
            "bindable": true
        },
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
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
