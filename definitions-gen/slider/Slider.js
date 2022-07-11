xds.component.Registry.addDefinition({
    "type": "Ext.slider.Slider",
    "className": "Ext.slider.Slider",
    "classAlias": "widget.slider",
    "inherits": "Ext.Component",
    "autoName": "MySlider",
    "cfgs": [
        {
            "name": "allowThumbsOverlapping",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 1,
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
            "name": "readOnly",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "thumbDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "thumb",
                "inheritUi": true,
                "translatable": {
                    "easingX": {
                        "duration": 300,
                        "type": "ease-out"
                    }
                }
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
            "name": "valueIsArray",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
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
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "slider",
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
                    "name": "slider",
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
            "name": "dragend",
            "params": [
                {
                    "name": "slider",
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
                    "name": "slider",
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
