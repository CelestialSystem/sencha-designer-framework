xds.component.Registry.addDefinition({
    "type": "Ext.tip.QuickTip",
    "className": "Ext.tip.QuickTip",
    "classAlias": "widget.quicktip",
    "inherits": "Ext.tip.ToolTip",
    "autoName": "MyQuickTip",
    "typeAlias": [
        "Ext.QuickTip"
    ],
    "cfgs": [
        {
            "name": "html",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "interceptTitles",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "shrinkWrapDock",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": true
        },
        {
            "name": "target",
            "type": "string",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "title",
            "type": "string",
            "defaultValue": "&#160;",
            "bindable": true
        }
    ]
});
