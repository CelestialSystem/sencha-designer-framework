xds.component.Registry.addDefinition({
    "type": "Ext.field.trigger.Trigger",
    "className": "Ext.field.trigger.Trigger",
    "classAlias": "widget.trigger",
    "inherits": "Ext.field.trigger.Base",
    "autoName": "MyTrigger",
    "cfgs": [
        {
            "name": "focusOnTap",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "repeat",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        }
    ]
});
