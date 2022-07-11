xds.component.Registry.addDefinition({
    "type": "Ext.tab.Bar",
    "className": "Ext.tab.Bar",
    "classAlias": "widget.tabbar",
    "inherits": "Ext.panel.Bar",
    "autoName": "MyBar",
    "cfgs": [
        {
            "name": "activateOnFocus",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "ensureActiveVisibleOnChange",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "plain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tabRotation",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "default",
                    "default"
                ],
                [
                    "0",
                    0
                ],
                [
                    "1",
                    1
                ],
                [
                    "2",
                    2
                ]
            ],
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "tabStretchMax",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "tabBar",
                    "type": "Ext.tab.Bar",
                    "optional": true
                },
                {
                    "name": "tab",
                    "type": "Ext.tab.Tab",
                    "optional": true
                },
                {
                    "name": "card",
                    "type": "Ext.Component",
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
