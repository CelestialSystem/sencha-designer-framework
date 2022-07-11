xds.component.Registry.addDefinition({
    "type": "Ext.ux.colorpick.Selector",
    "className": "Ext.ux.colorpick.Selector",
    "classAlias": "widget.colorselector",
    "inherits": "Ext.container.Container",
    "mixin": [
        "Ext.ux.colorpick.Selection"
    ],
    "autoName": "MySelector",
    "cfgs": [
        {
            "name": "fieldPad",
            "type": "number",
            "defaultValue": 5
        },
        {
            "name": "fieldWidth",
            "type": "number",
            "defaultValue": 50
        },
        {
            "name": "showOkCancelButtons",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "showPreviousColor",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "cancel",
            "params": [
                {
                    "name": "colorselector",
                    "type": "Ext.ux.colorpick.Selector",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "change",
            "params": [
                {
                    "name": "colorselector",
                    "type": "Ext.ux.colorpick.Selector",
                    "optional": true
                },
                {
                    "name": "color",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "previousColor",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "ok",
            "params": [
                {
                    "name": "colorselector",
                    "type": "Ext.ux.colorpick.Selector",
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
