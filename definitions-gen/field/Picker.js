xds.component.Registry.addDefinition({
    "type": "Ext.field.Picker",
    "className": "Ext.field.Picker",
    "classAlias": "widget.pickerfield",
    "inherits": "Ext.field.Text",
    "autoName": "MyPicker",
    "cfgs": [
        {
            "name": "alignTarget",
            "type": "string",
            "defaultValue": "bodyElement"
        },
        {
            "name": "autoComplete",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "edgePicker",
            "type": "object",
            "bindable": true
        },
        {
            "name": "floatedPicker",
            "type": "object",
            "bindable": true
        },
        {
            "name": "floatedPickerAlign",
            "type": "string",
            "defaultValue": "tl-bl?",
            "bindable": true
        },
        {
            "name": "hideTrigger",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "matchFieldWidth",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "picker",
            "type": "string",
            "defaultValue": "auto",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
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
        }
    ]
});
