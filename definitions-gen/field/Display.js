xds.component.Registry.addDefinition({
    "type": "Ext.field.Display",
    "className": "Ext.field.Display",
    "classAlias": "widget.displayfield",
    "inherits": "Ext.field.Field",
    "autoName": "MyDisplay",
    "typeAlias": [
        "Ext.form.Display"
    ],
    "cfgs": [
        {
            "name": "encodeHtml",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "field",
                    "type": "Ext.form.field.Display"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        }
    ]
});
