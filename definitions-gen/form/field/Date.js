xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Date",
    "className": "Ext.form.field.Date",
    "classAlias": "widget.datefield",
    "inherits": "Ext.form.field.Picker",
    "autoName": "MyDate",
    "typeAlias": [
        "Ext.form.DateField",
        "Ext.form.Date"
    ],
    "cfgs": [
        {
            "name": "altFormats",
            "type": "string"
        },
        {
            "name": "ariaDisabledDatesText",
            "type": "string",
            "defaultValue": "This date cannot be selected"
        },
        {
            "name": "ariaDisabledDaysText",
            "type": "string",
            "defaultValue": "This day of week is disabled"
        },
        {
            "name": "ariaFormat",
            "type": "string",
            "defaultValue": "M j Y"
        },
        {
            "name": "ariaMaxText",
            "type": "string",
            "defaultValue": "The date must be equal to or before {0}"
        },
        {
            "name": "ariaMinText",
            "type": "string",
            "defaultValue": "The date must be equal to or after {0}"
        },
        {
            "name": "componentCls",
            "type": "string",
            "defaultValue": "x-form-field-date"
        },
        {
            "name": "disabledDates",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "disabledDatesText",
            "type": "string",
            "defaultValue": "Disabled"
        },
        {
            "name": "disabledDays",
            "type": "array",
            "bindable": true
        },
        {
            "name": "disabledDaysText",
            "type": "string",
            "defaultValue": "Disabled"
        },
        {
            "name": "format",
            "type": "string",
            "defaultValue": "m/d/Y"
        },
        {
            "name": "formatText",
            "type": "string",
            "defaultValue": "Expected date format {0}."
        },
        {
            "name": "invalidText",
            "type": "string",
            "defaultValue": "{0} is not a valid date - it must be in the format {1}"
        },
        {
            "name": "matchFieldWidth",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "maxText",
            "type": "string",
            "defaultValue": "The date in this field must be equal to or before {0}"
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
            "defaultValue": "The date in this field must be equal to or after {0}"
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
            "name": "showToday",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "startDay",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "submitFormat",
            "type": "string"
        },
        {
            "name": "triggerCls",
            "type": "string",
            "defaultValue": "x-form-date-trigger"
        },
        {
            "name": "useStrict",
            "type": "boolean"
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
    ],
    "eventDefs": [
        {
            "name": "select",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Date",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Object",
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
