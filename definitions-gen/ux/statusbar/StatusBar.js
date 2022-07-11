xds.component.Registry.addDefinition({
    "type": "Ext.ux.statusbar.StatusBar",
    "className": "Ext.ux.statusbar.StatusBar",
    "classAlias": "widget.statusbar",
    "inherits": "Ext.toolbar.Toolbar",
    "autoName": "MyStatusBar",
    "typeAlias": [
        "Ext.ux.StatusBar"
    ],
    "cfgs": [
        {
            "name": "autoClear",
            "type": "number",
            "defaultValue": 5000
        },
        {
            "name": "busyIconCls",
            "type": "string",
            "defaultValue": "x-status-busy"
        },
        {
            "name": "busyText",
            "type": "string",
            "defaultValue": "Loading..."
        },
        {
            "name": "cls",
            "type": "string",
            "defaultValue": "x-statusbar"
        },
        {
            "name": "defaultIconCls",
            "type": "string"
        },
        {
            "name": "defaultText",
            "type": "string"
        },
        {
            "name": "emptyText",
            "type": "string",
            "defaultValue": "&#160;"
        },
        {
            "name": "iconCls",
            "type": "string"
        },
        {
            "name": "statusAlign",
            "type": "string"
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
