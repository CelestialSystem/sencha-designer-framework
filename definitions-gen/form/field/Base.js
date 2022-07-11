xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Base",
    "className": "Ext.form.field.Base",
    "classAlias": "widget.field",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.form.Labelable",
        "Ext.form.field.Field"
    ],
    "autoName": "MyBase",
    "typeAlias": [
        "Ext.form.Field",
        "Ext.form.BaseField"
    ],
    "cfgs": [
        {
            "name": "autoEl",
            "type": "string",
            "defaultValue": {
                "role": "presentation"
            },
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "baseCls",
            "type": "string",
            "defaultValue": "x-field"
        },
        {
            "name": "checkChangeBuffer",
            "type": "number",
            "defaultValue": 50
        },
        {
            "name": "checkChangeEvents",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "change",
                "input",
                "textInput",
                "keyup",
                "dragdrop"
            ]
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": [
                "inputEl"
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
            "name": "dirtyCls",
            "type": "string",
            "defaultValue": "x-form-dirty"
        },
        {
            "name": "fieldBodyCls",
            "type": "string",
            "defaultValue": "x-field-body"
        },
        {
            "name": "fieldCls",
            "type": "string",
            "defaultValue": "x-form-field"
        },
        {
            "name": "fieldStyle",
            "type": "string",
            "bindable": true
        },
        {
            "name": "focusCls",
            "type": "string",
            "defaultValue": "form-focus"
        },
        {
            "name": "inputAttrTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "inputId",
            "type": "string"
        },
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "text"
        },
        {
            "name": "invalidText",
            "type": "string",
            "defaultValue": "The value in this field is invalid"
        },
        {
            "name": "liquidLayout",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "rawValue",
                "value",
                "dirty"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "readOnly",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "readOnlyCls",
            "type": "string",
            "defaultValue": "x-form-readonly"
        },
        {
            "name": "shrinkWrap",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "bindable": true
        },
        {
            "name": "validateOnBlur",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "validateOnFocusLeave",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "specialkey",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Base",
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
            "name": "writeablechange",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Base",
                    "optional": true
                },
                {
                    "name": "Read",
                    "type": "Boolean",
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
