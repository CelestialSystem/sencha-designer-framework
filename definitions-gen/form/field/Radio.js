xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Radio",
    "className": "Ext.form.field.Radio",
    "classAlias": "widget.radiofield",
    "inherits": "Ext.form.field.Checkbox",
    "autoName": "MyRadio",
    "typeAlias": [
        "Ext.form.Radio"
    ],
    "cfgs": [
        {
            "name": "modelValue",
            "type": "auto",
            "allowBoolean": true
        },
        {
            "name": "modelValueUnchecked",
            "type": "auto",
            "allowBoolean": true
        }
    ]
});
