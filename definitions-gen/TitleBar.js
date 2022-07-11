xds.component.Registry.addDefinition({
    "type": "Ext.TitleBar",
    "className": "Ext.TitleBar",
    "classAlias": "widget.titlebar",
    "inherits": "Ext.Container",
    "autoName": "MyTitleBar",
    "cfgs": [
        {
            "name": "autoSize",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "border",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-navigation-bar",
            "bindable": true
        },
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
            "name": "items",
            "type": "array",
            "defaultValue": [],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "hbox",
                "align": "center"
            },
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "maxButtonWidth",
            "type": "string",
            "defaultValue": "40%",
            "bindable": true
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
        },
        {
            "name": "titleAlign",
            "type": "string",
            "defaultValue": "center",
            "bindable": true
        }
    ]
});
