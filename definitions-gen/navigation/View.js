xds.component.Registry.addDefinition({
    "type": "Ext.navigation.View",
    "className": "Ext.navigation.View",
    "classAlias": "widget.navigationview",
    "inherits": "Ext.Container",
    "autoName": "MyView",
    "typeAlias": [
        "Ext.NavigationView"
    ],
    "cfgs": [
        {
            "name": "defaultBackButtonText",
            "type": "string",
            "defaultValue": "Back",
            "bindable": true
        },
        {
            "name": "items",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "card",
                "animation": {
                    "duration": 300,
                    "easing": "ease-out",
                    "type": "slide",
                    "direction": "left"
                }
            },
            "bindable": true
        },
        {
            "name": "navigationBar",
            "type": "boolean",
            "defaultValue": {
                "docked": "top"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "useTitleForBackButtonText",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "back",
            "params": [
                {
                    "name": "navigationview",
                    "type": "Ext.navigation.View",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "pop",
            "params": [
                {
                    "name": "navigationview",
                    "type": "Ext.navigation.View",
                    "optional": true
                },
                {
                    "name": "view",
                    "type": "Mixed",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "push",
            "params": [
                {
                    "name": "navigationview",
                    "type": "Ext.navigation.View",
                    "optional": true
                },
                {
                    "name": "view",
                    "type": "Mixed",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
