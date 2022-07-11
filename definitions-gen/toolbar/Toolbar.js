xds.component.Registry.addDefinition({
    "type": "Ext.toolbar.Toolbar",
    "className": "Ext.toolbar.Toolbar",
    "classAlias": "widget.toolbar",
    "inherits": "Ext.container.Container",
    "autoName": "MyToolbar",
    "typeAlias": [
        "Ext.Toolbar"
    ],
    "cfgs": [
        {
            "name": "defaultButtonUI",
            "type": "string",
            "defaultValue": "default-toolbar"
        },
        {
            "name": "defaultFieldUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "defaultFooterButtonUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "defaultFooterFieldUI",
            "type": "string",
            "defaultValue": "default"
        },
        {
            "name": "enableOverflow",
            "type": "boolean",
            "defaultValue": false
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
            "name": "overflowHandler",
            "type": "string"
        },
        {
            "name": "trackMenus",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "overflowchange",
            "params": [
                {
                    "name": "lastHiddenCount",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "hiddenCount",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "hiddenItems",
                    "type": "Array",
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
