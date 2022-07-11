xds.component.Registry.addDefinition({
    "type": "Ext.panel.Collapser",
    "className": "Ext.panel.Collapser",
    "inherits": "Ext.Base",
    "autoName": "MyCollapser",
    "cfgs": [
        {
            "name": "animation",
            "type": "boolean",
            "defaultValue": {
                "duration": 250
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "collapseAnimation",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "collapsed",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "collapseToolText",
            "type": "string",
            "defaultValue": "Collapse panel",
            "bindable": true
        },
        {
            "name": "direction",
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
            "name": "drawer",
            "type": "object",
            "defaultValue": {
                "xtype": "panel",
                "border": true,
                "top": 0,
                "left": 0,
                "cls": "x-drawer"
            },
            "bindable": true
        },
        {
            "name": "drawerHideDelay",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        },
        {
            "name": "dynamic",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "expandAnimation",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "expandToolText",
            "type": "string",
            "defaultValue": "Expand panel",
            "bindable": true
        },
        {
            "name": "target",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tool",
            "type": "object",
            "defaultValue": {
                "xtype": "tool",
                "weight": 900
            },
            "bindable": true
        },
        {
            "name": "useDrawer",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
