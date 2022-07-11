xds.component.Registry.addDefinition({
    "type": "Ext.Toolbar",
    "className": "Ext.Toolbar",
    "classAlias": "widget.toolbar",
    "inherits": "Ext.Container",
    "autoName": "MyToolbar",
    "cfgs": [
        {
            "name": "defaultButtonUI",
            "type": "string",
            "bindable": true
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "button",
            "bindable": true
        },
        {
            "name": "docked",
            "type": "string",
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "box",
                "align": "center"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "minHeight",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        }
    ]
});
