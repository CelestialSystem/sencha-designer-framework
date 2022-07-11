xds.component.Registry.addDefinition({
    "type": "Ext.field.trigger.Menu",
    "className": "Ext.field.trigger.Menu",
    "classAlias": "widget.menutrigger",
    "inherits": "Ext.field.trigger.Trigger",
    "autoName": "MyMenu",
    "cfgs": [
        {
            "name": "destroyMenu",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "menu",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "menuAlign",
            "type": "string",
            "defaultValue": "tl-bl?",
            "bindable": true
        }
    ]
});
