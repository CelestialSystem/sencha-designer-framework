xds.component.Registry.addDefinition({
    "type": "Ext.form.trigger.Trigger",
    "className": "Ext.form.trigger.Trigger",
    "classAlias": "trigger.trigger",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyTrigger",
    "cfgs": [
        {
            "name": "cls",
            "type": "string"
        },
        {
            "name": "extraCls",
            "type": "string"
        },
        {
            "name": "handler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "hideOnReadOnly",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "repeatClick",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "tooltip",
            "type": "string"
        },
        {
            "name": "weight",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "width",
            "type": "number"
        }
    ]
});
