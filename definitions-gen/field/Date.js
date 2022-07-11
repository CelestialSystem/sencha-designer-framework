xds.component.Registry.addDefinition({
    "type": "Ext.field.Date",
    "className": "Ext.field.Date",
    "classAlias": "widget.datefield",
    "inherits": "Ext.field.Picker",
    "autoName": "MyDate",
    "typeAlias": [
        "Ext.form.DatePicker",
        "Ext.field.DatePicker"
    ],
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "defaultValue": "Ext.util.Format.defaultDateFormat",
            "bindable": true
        },
        {
            "name": "destroyPickerOnHide",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maxDate",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "minDate",
            "type": "date",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "date"
                }
            ]
        },
        {
            "name": "altFormats",
            "type": "string",
            "defaultValue": 'm/d/Y|' +
                            'n/j/Y|' +
                            'n/j/y|' +
                            'm/j/y|' +
                            'n/d/y|' +
                            'm/j/Y|' +
                            'n/d/Y|' +
                            'm-d-y|' +
                            'm-d-Y|' +
                            'm/d|' +
                            'm-d|' +
                            'md|' +
                            'mdy|' +
                            'mdY|' +
                            'd|' +
                            'Y-m-d|' +
                            'n-j|' +
                            'n/j',
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "submitFormat",
            "type": "string",
            "defaultValue": null
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "datefield",
                    "type": "Ext.field.Date",
                    "optional": true
                },
                {
                    "name": "newDate",
                    "type": "Date",
                    "optional": true
                },
                {
                    "name": "oldDate",
                    "type": "Date",
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
