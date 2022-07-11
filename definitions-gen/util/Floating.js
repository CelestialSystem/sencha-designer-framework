xds.component.Registry.addDefinition({
    "type": "Ext.util.Floating",
    "className": "Ext.util.Floating",
    "inherits": "Ext.Base",
    "autoName": "MyFloating",
    "cfgs": [
        {
            "name": "alignOnScroll",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "alwaysOnTop",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "animateShadow",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "constrain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "fixed",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "focusOnToFront",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "modal",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "shadow",
            "type": "string",
            "defaultValue": "sides",
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "shadowOffset",
            "type": "number"
        },
        {
            "name": "shim",
            "type": "boolean"
        }
    ]
});
