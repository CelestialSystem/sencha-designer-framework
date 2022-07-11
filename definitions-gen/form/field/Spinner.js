xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Spinner",
    "className": "Ext.form.field.Spinner",
    "classAlias": "widget.spinnerfield",
    "inherits": "Ext.form.field.Text",
    "autoName": "MySpinner",
    "typeAlias": [
        "Ext.form.Spinner"
    ],
    "cfgs": [
        {
            "name": "keyNavEnabled",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "mouseWheelEnabled",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "repeatTriggerClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "spinDownEnabled",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "spinUpEnabled",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "spin",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.form.field.Spinner",
                    "optional": true
                },
                {
                    "name": "direction",
                    "type": "String",
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
            "name": "spindown",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.form.field.Spinner",
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
            "name": "spinend",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.form.field.Spinner",
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
            "name": "spinup",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.form.field.Spinner",
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
