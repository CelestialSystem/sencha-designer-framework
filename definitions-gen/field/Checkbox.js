xds.component.Registry.addDefinition({
    "type": "Ext.field.Checkbox",
    "className": "Ext.field.Checkbox",
    "classAlias": "widget.checkbox",
    "inherits": "Ext.field.Input",
    "mixin": [
        "Ext.field.BoxLabelable"
    ],
    "autoName": "MyCheckbox",
    "typeAlias": [
        "Ext.form.Checkbox"
    ],
    "cfgs": [
        {
            "name": "checked",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "checked": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "shareableName",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "checked": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "value",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "checkbox",
                    "type": "Ext.field.Checkbox",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Boolean",
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
            "name": "check",
            "params": [
                {
                    "name": "checkbox",
                    "type": "Ext.field.Checkbox",
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
            "name": "uncheck",
            "params": [
                {
                    "name": "checkbox",
                    "type": "Ext.field.Checkbox",
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
