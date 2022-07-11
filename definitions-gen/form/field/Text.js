xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Text",
    "className": "Ext.form.field.Text",
    "classAlias": "widget.textfield",
    "inherits": "Ext.form.field.Base",
    "autoName": "MyText",
    "typeAlias": [
        "Ext.form.TextField",
        "Ext.form.Text"
    ],
    "cfgs": [
        {
            "name": "allowBlank",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "allowOnlyWhitespace",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoHideInputMask",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "blankText",
            "type": "string",
            "defaultValue": "This field is required"
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "triggerWrap",
                "inputWrap",
                "placeholderLabel"
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
            "name": "componentLayout",
            "type": "string",
            "defaultValue": "textfield",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "disableKeyFilter",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "emptyCls",
            "type": "string",
            "defaultValue": "x-form-empty-field"
        },
        {
            "name": "emptyText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "enableKeyEvents",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "enforceMaxLength",
            "type": "boolean"
        },
        {
            "name": "fieldBodyCls",
            "type": "string",
            "defaultValue": "x-form-text-field-body"
        },
        {
            "name": "grow",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "growMax",
            "type": "number",
            "defaultValue": 800
        },
        {
            "name": "growMin",
            "type": "number",
            "defaultValue": 30
        },
        {
            "name": "hideTrigger",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "inputMask",
            "type": "string",
            "bindable": true
        },
        {
            "name": "inputWrapCls",
            "type": "string",
            "defaultValue": "x-form-text-wrap"
        },
        {
            "name": "maskRe",
            "type": "regex"
        },
        {
            "name": "maxLength",
            "type": "number",
            "defaultValue": 1.7976931348623157e+308
        },
        {
            "name": "maxLengthText",
            "type": "string",
            "defaultValue": "The maximum length for this field is {0}"
        },
        {
            "name": "minLength",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "minLengthText",
            "type": "string",
            "defaultValue": "The minimum length for this field is {0}"
        },
        {
            "name": "readOnly",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "regex",
            "type": "regex"
        },
        {
            "name": "regexText",
            "type": "string"
        },
        {
            "name": "repeatTriggerClick",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "requiredCls",
            "type": "string",
            "defaultValue": "x-form-required-field"
        },
        {
            "name": "selectOnFocus",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "stripCharsRe",
            "type": "regex"
        },
        {
            "name": "triggers",
            "type": "object",
            "bindable": true
        },
        {
            "name": "triggerWrapCls",
            "type": "string",
            "defaultValue": "x-form-trigger-wrap"
        },
        {
            "name": "validateBlank",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "validator",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                }
            ]
        },
        {
            "name": "vtype",
            "type": "string"
        },
        {
            "name": "vtypeText",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "autosize",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.form.field.Text",
                    "optional": true
                },
                {
                    "name": "width",
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
            "name": "keydown",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.form.field.Text",
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
            "name": "keypress",
            "params": [
                {
                    "name": "textfield",
                    "type": "Ext.form.field.Text",
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
                    "type": "Ext.form.field.Text",
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
                    "type": "Ext.form.field.Text",
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
