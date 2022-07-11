xds.component.Registry.addDefinition({
    "type": "Ext.layout.Box",
    "className": "Ext.layout.Box",
    "classAlias": "layout.box",
    "inherits": "Ext.layout.Auto",
    "autoName": "MyBox",
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "stretch",
            "bindable": true
        },
        {
            "name": "constrainAlign",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "overflow",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "pack",
            "type": "string",
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "reverse",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "wrap",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "nowrap",
                    "nowrap"
                ],
                [
                    "wrap",
                    "wrap"
                ],
                [
                    "false",
                    false
                ],
                [
                    "true",
                    true
                ]
            ],
            "defaultValue": false,
            "bindable": true
        }
    ]
});
