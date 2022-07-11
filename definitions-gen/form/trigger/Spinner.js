xds.component.Registry.addDefinition({
    "type": "Ext.form.trigger.Spinner",
    "className": "Ext.form.trigger.Spinner",
    "classAlias": "trigger.spinner",
    "inherits": "Ext.form.trigger.Trigger",
    "autoName": "MySpinner",
    "cfgs": [
        {
            "name": "downHandler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "upHandler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
