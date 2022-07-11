xds.component.Registry.addDefinition({
    "type": "Ext.field.Slider",
    "className": "Ext.field.Slider",
    "classAlias": "widget.sliderfield",
    "inherits": "Ext.field.Field",
    "mixin": [
        "Ext.mixin.ConfigProxy",
        "Ext.field.BoxLabelable"
    ],
    "autoName": "MySlider",
    "typeAlias": [
        "Ext.form.Slider"
    ],
    "cfgs": [
        {
            "name": "bodyAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "end",
                "start",
                "stretch"
            ],
            "defaultValue": "stretch",
            "bindable": true
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "liveUpdate",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maxValue",
            "type": "number",
            "defaultValue": 100
        },
        {
            "name": "minValue",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "readOnly",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": -1,
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "values": 1,
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
        },
        {
            "name": "values",
            "type": "number",
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
            "defaultValue": false
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
                    "type": "Number[]",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number[]",
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
                    "name": "thumb",
                    "type": "Ext.slider.Thumb",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number[]",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number[]",
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
