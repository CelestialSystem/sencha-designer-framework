xds.component.Registry.addDefinition({
    "type": "Ext.field.Spinner",
    "className": "Ext.field.Spinner",
    "classAlias": "widget.spinnerfield",
    "inherits": "Ext.field.Number",
    "autoName": "MySpinner",
    "typeAlias": [
        "Ext.form.Spinner"
    ],
    "cfgs": [
        {
            "name": "accelerateOnTapHold",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "clearable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "cycle",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "decimals",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "stepValue",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "value",
            "type": "object",
            "defaultValue": 0,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "action",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "spin",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.field.Spinner",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number",
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
                    "type": "Ext.field.Spinner",
                    "optional": true
                },
                {
                    "name": "value",
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
            "name": "spinup",
            "params": [
                {
                    "name": "spinnerfield",
                    "type": "Ext.field.Spinner",
                    "optional": true
                },
                {
                    "name": "value",
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
            "name": "updatedata",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
