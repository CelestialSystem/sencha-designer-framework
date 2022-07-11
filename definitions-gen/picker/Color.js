xds.component.Registry.addDefinition({
    "type": "Ext.picker.Color",
    "className": "Ext.picker.Color",
    "classAlias": "widget.colorpicker",
    "inherits": "Ext.Component",
    "autoName": "MyColor",
    "typeAlias": [
        "Ext.ColorPalette"
    ],
    "cfgs": [
        {
            "name": "allowReselect",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "clickEvent",
            "type": "string",
            "defaultValue": "click"
        },
        {
            "name": "componentCls",
            "type": "string",
            "defaultValue": "x-color-picker"
        },
        {
            "name": "handler",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "itemCls",
            "type": "string",
            "defaultValue": "x-color-picker-item"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "selectedCls",
            "type": "string",
            "defaultValue": "x-color-picker-selected"
        },
        {
            "name": "value",
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
