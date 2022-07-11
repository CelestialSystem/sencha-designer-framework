xds.component.Registry.addDefinition({
    "type": "Ext.tab.Panel",
    "className": "Ext.tab.Panel",
    "classAlias": "widget.tabpanel",
    "inherits": "Ext.Container",
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.TabPanel"
    ],
    "cfgs": [
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-tabpanel",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "card",
                "animation": {
                    "type": "slide"
                }
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "scroll",
            "type": "boolean",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scrollable",
            "type": "boolean",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "tabBar",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "tabBarPosition",
            "type": "string",
            "defaultValue": "top",
            "bindable": true
        }
    ]
});
