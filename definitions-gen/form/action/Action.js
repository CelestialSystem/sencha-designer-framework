xds.component.Registry.addDefinition({
    "type": "Ext.form.action.Action",
    "className": "Ext.form.action.Action",
    "inherits": "Ext.Base",
    "autoName": "MyAction",
    "typeAlias": [
        "Ext.form.Action"
    ],
    "cfgs": [
        {
            "name": "failure",
            "type": "function",
            "params": [
                {
                    "name": "form",
                    "type": "Ext.form.Basic"
                },
                {
                    "name": "action",
                    "type": "Ext.form.action.Action"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "form",
            "type": "object"
        },
        {
            "name": "headers",
            "type": "object"
        },
        {
            "name": "method",
            "type": "string"
        },
        {
            "name": "params",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "reset",
            "type": "boolean"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "submitEmptyText",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "success",
            "type": "function",
            "params": [
                {
                    "name": "form",
                    "type": "Ext.form.Basic"
                },
                {
                    "name": "action",
                    "type": "Ext.form.action.Action"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "timeout",
            "type": "number"
        },
        {
            "name": "url",
            "type": "string"
        },
        {
            "name": "waitMsg",
            "type": "string"
        },
        {
            "name": "waitTitle",
            "type": "string"
        }
    ]
});
