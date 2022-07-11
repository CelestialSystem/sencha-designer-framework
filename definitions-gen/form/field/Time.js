xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Time",
    "className": "Ext.form.field.Time",
    "classAlias": "widget.timefield",
    "inherits": "Ext.form.field.ComboBox",
    "autoName": "MyTime",
    "typeAlias": [
        "Ext.form.TimeField",
        "Ext.form.Time"
    ],
    "cfgs": [
        {
            "name": "altFormats",
            "type": "string"
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "disp",
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "defaultValue": "g:i A"
        },
        {
            "name": "formatText",
            "type": "string",
            "defaultValue": "Expected time format HH:MM space AM or PM"
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": 15
        },
        {
            "name": "invalidText",
            "type": "string",
            "defaultValue": "{0} is not a valid time"
        },
        {
            "name": "maxText",
            "type": "string",
            "defaultValue": "The time in this field must be equal to or before {0}"
        },
        {
            "name": "maxValue",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "minText",
            "type": "string",
            "defaultValue": "The time in this field must be equal to or after {0}"
        },
        {
            "name": "minValue",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "pickerMaxHeight",
            "type": "number",
            "defaultValue": 300
        },
        {
            "name": "queryMode",
            "type": "string",
            "defaultValue": "local"
        },
        {
            "name": "selectOnTab",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "snapToIncrement",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "submitFormat",
            "type": "string"
        },
        {
            "name": "triggerCls",
            "type": "string",
            "defaultValue": "x-form-time-trigger"
        },
        {
            "name": "valueField",
            "type": "string",
            "defaultValue": "date"
        },
        {
            "name": "valuePublishEvent",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "select",
                "blur"
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
