xds.component.Registry.addDefinition({
    "type": "Ext.ux.colorpick.Field",
    "className": "Ext.ux.colorpick.Field",
    "classAlias": "widget.colorfield",
    "inherits": "Ext.form.field.Picker",
    "mixin": [
        "Ext.ux.colorpick.Selection"
    ],
    "autoName": "MyField",
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "colorfield",
                    "type": "Ext.ux.colorpick.Field",
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
