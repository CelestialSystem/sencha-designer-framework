xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Field",
    "className": "Ext.form.field.Field",
    "inherits": "Ext.Base",
    "autoName": "MyField",
    "cfgs": [
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": "value",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "submitValue",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "validateOnChange",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "validation",
            "type": "boolean",
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
            "bindable": true
        },
        {
            "name": "valuePublishEvent",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "change",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Field",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Object",
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
            "name": "dirtychange",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Field",
                    "optional": true
                },
                {
                    "name": "isDirty",
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
            "name": "validitychange",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.form.field.Field",
                    "optional": true
                },
                {
                    "name": "isValid",
                    "type": "Boolean",
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
