xds.component.Registry.addDefinition({
    "type": "Ext.slider.Multi",
    "className": "Ext.slider.Multi",
    "classAlias": "widget.multislider",
    "inherits": "Ext.form.field.Base",
    "autoName": "MyMulti",
    "typeAlias": [
        "Ext.slider.MultiSlider"
    ],
    "cfgs": [
        {
            "name": "animate",
            "type": "object",
            "defaultValue": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "endEl",
                "innerEl"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "clickToChange",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "constrainThumbs",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "decimalPrecision",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": 0
        },
        {
            "name": "fieldSubTpl",
            "type": "template",
            "defaultValue": [
                "<div id=\"{id}\" data-ref=\"inputEl\" {inputAttrTpl}",
                " class=\"",
                "x-",
                "slider {fieldCls} {vertical}",
                "{childElCls}\"",
                "<tpl if=\"tabIdx != null\"> tabindex=\"{tabIdx}\"</tpl>",
                "<tpl foreach=\"ariaElAttributes\"> {$}=\"{.}\"</tpl>",
                "<tpl foreach=\"inputElAriaAttributes\"> {$}=\"{.}\"</tpl>",
                ">",
                "<div id=\"{cmpId}-endEl\" data-ref=\"endEl\" class=\"x-slider-end\" role=\"presentation\">",
                "<div id=\"{cmpId}-innerEl\" data-ref=\"innerEl\" class=\"x-slider-inner\" role=\"presentation\">",
                "{%this.renderThumbs(out, values)%}",
                "</div>",
                "</div>",
                "</div>",
                {
                    "disableFormats": true
                }
            ]
        },
        {
            "name": "focusCls",
            "type": "string",
            "defaultValue": "slider-focus"
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "keyIncrement",
            "type": "number",
            "defaultValue": 1
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
            "name": "pageSize",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "value"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "thumbPerValue",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tipText",
            "type": "function",
            "params": [
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "useTips",
            "type": "object",
            "defaultValue": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true
        },
        {
            "name": "values",
            "type": "array"
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "zeroBasedSnapping",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "beforechange",
            "params": [
                {
                    "name": "slider",
                    "type": "Ext.slider.Multi",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number/null",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/null",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb/null",
                    "optional": true
                },
                {
                    "name": "type",
                    "type": "String",
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
            "name": "change",
            "params": [
                {
                    "name": "slider",
                    "type": "Ext.slider.Multi",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number/null",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb/null",
                    "optional": true
                },
                {
                    "name": "type",
                    "type": "String",
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
            "name": "changecomplete",
            "params": [
                {
                    "name": "slider",
                    "type": "Ext.slider.Multi",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "thumb",
                    "type": "Ext.slider.Thumb",
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
                    "type": "Ext.slider.Multi",
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
                    "type": "Ext.slider.Multi",
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
                    "type": "Ext.slider.Multi",
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
