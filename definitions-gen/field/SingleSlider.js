xds.component.Registry.addDefinition({
    "type": "Ext.field.SingleSlider",
    "className": "Ext.field.SingleSlider",
    "classAlias": "widget.singlesliderfield",
    "inherits": "Ext.field.Slider",
    "autoName": "MySingleSlider",
    "cfgs": [
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "value": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "value": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
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
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "me",
                    "type": "Ext.field.Slider",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "drag",
            "params": [
                {
                    "name": "sliderfield",
                    "type": "Ext.field.Slider",
                    "optional": true
                },
                {
                    "name": "sl",
                    "type": "Ext.slider.Slider",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragchange",
            "params": [
                {
                    "name": "me",
                    "type": "Ext.field.Slider",
                    "optional": true
                },
                {
                    "name": "sl",
                    "type": "Ext.slider.Slider",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragend",
            "params": [
                {
                    "name": "sliderfield",
                    "type": "Ext.field.Slider",
                    "optional": true
                },
                {
                    "name": "sl",
                    "type": "Ext.slider.Slider",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "dragstart",
            "params": [
                {
                    "name": "sliderfield",
                    "type": "Ext.field.Slider",
                    "optional": true
                },
                {
                    "name": "sl",
                    "type": "Ext.slider.Slider",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Array",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
