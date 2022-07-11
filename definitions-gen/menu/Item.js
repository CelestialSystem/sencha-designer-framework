xds.component.Registry.addDefinition({
    "type": "Ext.menu.Item",
    "className": "Ext.menu.Item",
    "classAlias": "widget.menuitem",
    "inherits": "Ext.Component",
    "autoName": "MyItem",
    "typeAlias": [
        "Ext.menu.TextItem"
    ],
    "cfgs": [
        {
            "name": "clickHideDelay",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "destroyMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "handler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "item",
                    "type": "Ext.menu.Item"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "hideOnClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "href",
            "type": "string",
            "defaultValue": "#",
            "bindable": true
        },
        {
            "name": "icon",
            "type": "string",
            "bindable": true
        },
        {
            "name": "iconAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "left",
                "right"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "indented",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "menu",
            "type": "object",
            "bindable": true
        },
        {
            "name": "menuAlign",
            "type": "string",
            "defaultValue": "tl-tr?",
            "bindable": true
        },
        {
            "name": "menuExpandDelay",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "menuHideDelay",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "separator",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "target",
            "type": "string",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
