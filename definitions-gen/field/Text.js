xds.component.Registry.addDefinition({
    "type": "Ext.field.Text",
    "className": "Ext.field.Text",
    "classAlias": "widget.textfield",
    "inherits": "Ext.field.Input",
    "autoName": "MyText",
    "typeAlias": [
        "Ext.form.Text"
    ],
    "cfgs": [
        {
            "name": "animateUnderline",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "autoCapitalize",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "autoComplete",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoCorrect",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "autoHideInputMask",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "badFormatMessage",
            "type": "string",
            "defaultValue": "Value does not match the required format"
        },
        {
            "name": "bodyAlign",
            "type": "object",
            "defaultValue": "stretch",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "clearable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "inputMask",
            "type": "string",
            "bindable": true
        },
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "labelAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "maxLength",
            "type": "number",
            "bindable": true
        },
        {
            "name": "pattern",
            "type": "string",
            "bindable": true
        },
        {
            "name": "placeholder",
            "type": "string",
            "bindable": true
        },
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
            "name": "textAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "triggers",
            "type": "object",
            "defaultValue": {
                "clear": {
                    "type": "clear"
                }
            },
            "bindable": true
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
            "name": "stripCharsRe",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "action",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Mixed",
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
            "name": "blur",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
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
            "name": "clearicontap",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
                    "optional": true
                },
                {
                    "name": "input",
                    "type": "Ext.field.Input",
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
            "name": "focus",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
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
            "name": "keyup",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
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
            "name": "mousedown",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
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
            "name": "paste",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.field.Text",
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
            "name":"keydown",
            "params": [
                {
                    "name":"textfield",
                    "name":"e",
                    "optional": true
                }
            ]
        }
    ]
});
