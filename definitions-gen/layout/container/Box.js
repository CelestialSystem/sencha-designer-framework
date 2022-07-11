xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Box",
    "className": "Ext.layout.container.Box",
    "classAlias": "layout.box",
    "inherits": "Ext.layout.container.Container",
    "autoName": "MyBox",
    "typeAlias": [
        "Ext.layout.BoxLayout"
    ],
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "begin",
            "bindable": true
        },
        {
            "name": "alignRoundingMethod",
            "type": "string",
            "editor": "options",
            "options": [
                "ceil",
                "floor",
                "round"
            ],
            "defaultValue": "round",
            "bindable": true
        },
        {
            "name": "constrainAlign",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "enableSplitters",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "overflowHandler",
            "type": "string",
            "bindable": true
        },
        {
            "name": "pack",
            "type": "string",
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "padding",
            "type": "string",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "stretchMaxPartner",
            "type": "string",
            "bindable": true
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
