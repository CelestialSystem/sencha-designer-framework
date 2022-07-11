xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Number",
    "className": "Ext.form.field.Number",
    "classAlias": "widget.numberfield",
    "inherits": "Ext.form.field.Spinner",
    "autoName": "MyNumber",
    "typeAlias": [
        "Ext.form.NumberField",
        "Ext.form.Number"
    ],
    "cfgs": [
        {
            "name": "allowDecimals",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "allowExponential",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoStripChars",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "baseChars",
            "type": "string",
            "defaultValue": "0123456789"
        },
        {
            "name": "decimalPrecision",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "decimalSeparator",
            "type": "string"
        },
        {
            "name": "maxText",
            "type": "string",
            "defaultValue": "The maximum value for this field is {0}"
        },
        {
            "name": "maxValue",
            "type": "number",
            "defaultValue": 1.7976931348623157e+308,
            "bindable": true
        },
        {
            "name": "minText",
            "type": "string",
            "defaultValue": "The minimum value for this field is {0}"
        },
        {
            "name": "minValue",
            "type": "number",
            "defaultValue": null,
            "bindable": true
        },
        {
            "name": "nanText",
            "type": "string",
            "defaultValue": "{0} is not a valid number"
        },
        {
            "name": "negativeText",
            "type": "string",
            "defaultValue": "The value cannot be negative"
        },
        {
            "name": "step",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "submitLocaleSeparator",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
