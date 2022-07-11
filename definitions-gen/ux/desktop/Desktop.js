xds.component.Registry.addDefinition({
    "type": "Ext.ux.desktop.Desktop",
    "className": "Ext.ux.desktop.Desktop",
    "classAlias": "widget.desktop",
    "inherits": "Ext.panel.Panel",
    "autoName": "MyDesktop",
    "cfgs": [
        {
            "name": "shortcutItemSelector",
            "type": "string",
            "defaultValue": "div.ux-desktop-shortcut"
        },
        {
            "name": "shortcuts",
            "type": "array"
        },
        {
            "name": "shortcutTpl",
            "type": "string"
        },
        {
            "name": "taskbarConfig",
            "type": "object"
        }
    ]
});
