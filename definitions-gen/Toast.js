xds.component.Registry.addDefinition({
    "type": "Ext.Toast",
    "className": "Ext.Toast",
    "inherits": "Ext.Sheet",
    "autoName": "MyToast",
    "cfgs": [
        {
            "name": "centered",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "hideAnimation",
            "type": "string",
            "defaultValue": {
                "type": "popOut",
                "duration": 250,
                "easing": "ease-out"
            },
            "bindable": true
        },
        {
            "name": "hideOnMaskTap",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "vbox",
                "pack": "center"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "maxQueue",
            "type": "number",
            "defaultValue": 3,
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "bindable": true
        },
        {
            "name": "messageAnimation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "modal",
            "type": "object",
            "defaultValue": false,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "showAnimation",
            "type": "string",
            "defaultValue": {
                "type": "popIn",
                "duration": 250,
                "easing": "ease-out"
            },
            "bindable": true
        },
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": 1000,
            "bindable": true
        },
        {
            "name": "zIndex",
            "type": "object",
            "defaultValue": 999,
            "bindable": true
        }
    ]
});
