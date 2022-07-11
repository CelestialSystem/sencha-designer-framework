xds.component.Registry.addDefinition({
    "type": "Ext.ux.colorpick.Button",
    "className": "Ext.ux.colorpick.Button",
    "classAlias": "widget.colorbutton",
    "inherits": "Ext.Component",
    "mixin": [
        "Ext.ux.colorpick.Selection"
    ],
    "autoName": "MyButton",
    "eventDefs": [
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
        }
    ]
});
