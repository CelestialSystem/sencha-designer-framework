xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Picker",
    "className": "Ext.form.field.Picker",
    "classAlias": "widget.pickerfield",
    "inherits": "Ext.form.field.Text",
    "autoName": "MyPicker",
    "typeAlias": [
        "Ext.form.Picker"
    ],
    "cfgs": [
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "matchFieldWidth",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "openCls",
            "type": "string",
            "defaultValue": "x-pickerfield-open"
        },
        {
            "name": "pickerAlign",
            "type": "string",
            "defaultValue": "tl-bl?"
        },
        {
            "name": "pickerOffset",
            "type": "array"
        },
        {
            "name": "triggerCls",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "collapse",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Picker",
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
            "name": "expand",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Picker",
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
            "name": "select",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Picker",
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
