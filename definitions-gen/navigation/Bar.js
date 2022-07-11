xds.component.Registry.addDefinition({
    "type": "Ext.navigation.Bar",
    "className": "Ext.navigation.Bar",
    "inherits": "Ext.TitleBar",
    "autoName": "MyBar",
    "cfgs": [
        {
            "name": "android2Transforms",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-navigation-bar",
            "bindable": true
        },
        {
            "name": "defaultType",
            "type": "object",
            "defaultValue": "button",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "items",
            "type": "array",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "hbox"
            },
            "bindable": true
        },
        {
            "name": "ui",
            "type": "string",
            "defaultValue": "dark",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "back",
            "params": [
                {
                    "name": "bar",
                    "type": "Ext.navigation.Bar",
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
