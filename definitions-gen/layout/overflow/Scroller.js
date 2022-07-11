xds.component.Registry.addDefinition({
    "type": "Ext.layout.overflow.Scroller",
    "className": "Ext.layout.overflow.Scroller",
    "classAlias": "layout.overflow.scroller",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyScroller",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "arrows",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "backwardTool",
            "type": "object",
            "defaultValue": {
                "xtype": "tool",
                "ui": "boxscroller",
                "focusable": false
            },
            "bindable": true
        },
        {
            "name": "forwardTool",
            "type": "object",
            "defaultValue": {
                "xtype": "tool",
                "ui": "boxscroller",
                "focusable": false
            },
            "bindable": true
        },
        {
            "name": "increment",
            "type": "number",
            "defaultValue": "item",
            "bindable": true,
            "alternates": [
                {
                    "type": "string",
                    "editor": "options",
                    "options": [
                        "item",
                        "page"
                    ]
                }
            ]
        },
        {
            "name": "mouseWheel",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "repeatInterval",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        },
        {
            "name": "toolAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "end",
                "start",
                "stretch"
            ],
            "defaultValue": "stretch",
            "bindable": true
        },
        {
            "name": "wheelIncrement",
            "type": "number",
            "defaultValue": 10,
            "bindable": true
        }
    ]
});
