xds.component.Registry.addDefinition({
    "type": "Ext.froala.Mixin",
    "className": "Ext.froala.Mixin",
    "inherits": "Ext.Mixin",
    "autoName": "MyFroalaMixin",
    "cfgs": [
        {
            "name": "activationKey",
            "type": "string",
            "defaultValue": undefined
        },
        {
            "name": "defaultEditor",
            "type": "object",
            "defaultValue": {
                "iconsTemplate": 'font_awesome_5'
            }
        },
        {
            "name": "value",
            "type": "string",
            "defaultValue": ''
        },
        {
            "name": "editor",
            "type": "object",
            "defaultValue": {}
        }
    ]
});
