xds.component.Registry.addDefinition({
    "type": "Ext.field.Container",
    "className": "Ext.field.Container",
    "classAlias": "widget.containerfield",
    "inherits": "Ext.field.Field",
    "mixin": [
        "Ext.field.Manager",
        "Ext.mixin.ConfigProxy"
    ],
    "autoName": "MyContainer",
    "cfgs": [
        {
            "name": "autoSize",
            "type": "object"
        },
        {
            "name": "container",
            "type": "object",
            "defaultValue": {
                "xtype": "container",
                "autoSize": null,
                "defaultType": "textfield",
                "defaults": {
                    "errorTarget": "parent"
                },
                "layout": {
                    "type": "hbox"
                }
            },
            "bindable": true
        },
        {
            "name": "defaults",
            "type": "object"
        },
        {
            "name": "defaultType",
            "type": "string",
            "defaultValue": "container"
        },
        {
            "name": "error",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "items",
            "type": "array",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": "auto",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
