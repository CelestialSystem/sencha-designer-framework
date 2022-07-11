xds.component.Registry.addDefinition({
    "type": "Ext.tab.Panel",
    "className": "Ext.tab.Panel",
    "classAlias": "widget.tabpanel",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.TabPanel"
    ],
    "cfgs": [
        {
            "name": "activeItem",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "activeTab",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                }
            ]
        },
        {
            "name": "deferredRender",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "itemCls",
            "type": "string",
            "defaultValue": "x-tabpanel-child"
        },
        {
            "name": "layout",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "maxTabWidth",
            "type": "number"
        },
        {
            "name": "minTabWidth",
            "type": "number"
        },
        {
            "name": "plain",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "removePanelHeader",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "tabBar",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tabBarHeaderPosition",
            "type": "number"
        },
        {
            "name": "tabPosition",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "top",
            "bindable": true
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
            "name": "beforetabchange",
            "params": [
                {
                    "name": "tabPanel",
                    "type": "Ext.tab.Panel",
                    "optional": true
                },
                {
                    "name": "newCard",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "oldCard",
                    "type": "Ext.Component",
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
            "name": "tabchange",
            "params": [
                {
                    "name": "tabPanel",
                    "type": "Ext.tab.Panel",
                    "optional": true
                },
                {
                    "name": "newCard",
                    "type": "Ext.Component",
                    "optional": true
                },
                {
                    "name": "oldCard",
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
