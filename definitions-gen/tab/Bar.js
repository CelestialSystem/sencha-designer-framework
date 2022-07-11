xds.component.Registry.addDefinition({
    "type": "Ext.tab.Bar",
    "className": "Ext.tab.Bar",
    "classAlias": "widget.tabbar",
    "inherits": "Ext.Toolbar",
    "autoName": "MyBar",
    "typeAlias": [
        "Ext.TabBar"
    ],
    "cfgs": [
        {
            "name": "activeTab",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "animateIndicator",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "defaultTabUI",
            "type": "string",
            "bindable": true
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "tab",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "hbox",
                "align": "stretch"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "tabchange",
            "params": [
                {
                    "name": "tabbar",
                    "type": "Ext.tab.Bar",
                    "optional": true
                },
                {
                    "name": "newTab",
                    "type": "Ext.tab.Tab",
                    "optional": true
                },
                {
                    "name": "oldTab",
                    "type": "Ext.tab.Tab",
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
            "name": "beforeactiveTabchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.tab.Bar",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String/Ext.Component",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String/Ext.Component",
                    "optional": true
                },
                {
                    "type": "Boolean",
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
            "name": "activeTabchange",
            "params": [
                {
                    "name": "sender",
                    "type": "Ext.tab.Bar",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "Number/String/Ext.Component",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Number/String/Ext.Component",
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
