xds.component.Registry.addDefinition({
    "type": "Ext.app.Application",
    "className": "Ext.app.Application",
    "inherits": "Ext.app.Controller",
    "autoName": "MyApplication",
    "cfgs": [
        {
            "name": "appFolder",
            "type": "string",
            "defaultValue": "app"
        },
        {
            "name": "appProperty",
            "type": "string",
            "defaultValue": "app",
            "bindable": true
        },
        {
            "name": "controllers",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "currentProfile",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultToken",
            "type": "string",
            "bindable": true
        },
        {
            "name": "extend",
            "type": "string"
        },
        {
            "name": "glyphFontFamily",
            "type": "string",
            "bindable": true
        },
        {
            "name": "mainView",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "namespaces",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": []
        },
        {
            "name": "paths",
            "type": "object"
        },
        {
            "name": "profiles",
            "type": "typedarray",
            "collapseSingleValue": false,
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "quickTips",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "router",
            "type": "object",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object"
        }
    ]
});
