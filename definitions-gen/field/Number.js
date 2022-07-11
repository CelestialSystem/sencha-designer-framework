xds.component.Registry.addDefinition({
    "type": "Ext.field.Number",
    "className": "Ext.field.Number",
    "classAlias": "widget.numberfield",
    "inherits": "Ext.field.Text",
    "autoName": "MyNumber",
    "typeAlias": [
        "Ext.form.Number"
    ],
    "cfgs": [
        {
            "name": "decimals",
            "type": "number",
            "defaultValue": 2,
            "bindable": true
        },
        {
            "name": "decimalsText",
            "type": "string",
            "defaultValue": "The maximum decimal places is {0}"
        },
        {
            "name": "inputType",
            "type": "string",
            "defaultValue": "Ext.os.is.Desktop ? 'text' : 'number'",
            "bindable": true
        },
        {
            "name": "maxValue",
            "type": "number",
            "bindable": true
        },
        {
            "name": "maxValueText",
            "type": "string",
            "defaultValue": "The maximum value for this field is {0}"
        },
        {
            "name": "minValue",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minValueText",
            "type": "string",
            "defaultValue": "The minimum value for this field is {0}"
        },
        {
            "name": "trim",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "decimalSeparator",
            "type": "string",
            "defaultValue": null
        }
    ]
});
