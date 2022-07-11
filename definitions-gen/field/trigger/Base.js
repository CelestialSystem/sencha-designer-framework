xds.component.Registry.addDefinition({
    "type": "Ext.field.trigger.Base",
    "className": "Ext.field.trigger.Base",
    "classAlias": "trigger.base",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "group",
            "type": "string",
            "bindable": true
        },
        {
            "name": "side",
            "type": "string",
            "editor": "options",
            "options": [
                "left",
                "right"
            ],
            "defaultValue": "right",
            "bindable": true
        }
    ]
});
