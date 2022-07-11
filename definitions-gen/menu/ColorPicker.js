xds.component.Registry.addDefinition({
    "type": "Ext.menu.ColorPicker",
    "className": "Ext.menu.ColorPicker",
    "classAlias": "widget.colormenu",
    "inherits": "Ext.menu.Menu",
    "autoName": "MyColorPicker",
    "cfgs": [
        {
            "name": "hideOnClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "pickerId",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "select",
            "params": [
                {
                    "name": "colorpicker",
                    "type": "Ext.picker.Color",
                    "optional": true
                },
                {
                    "name": "color",
                    "type": "String",
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
