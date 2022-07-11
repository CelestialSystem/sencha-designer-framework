xds.component.Registry.addDefinition({
    "type": "Ext.app.Profile",
    "className": "Ext.app.Profile",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyProfile",
    "cfgs": [
        {
            "name": "application",
            "type": "object",
            "bindable": true
        },
        {
            "name": "controllers",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "mainView",
            "type": "string",
            "bindable": true
        },
        {
            "name": "models",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "namespace",
            "type": "string",
            "bindable": true
        },
        {
            "name": "stores",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "views",
            "type": "object",
            "defaultValue": [],
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        }
    ]
});
