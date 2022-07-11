xds.component.Registry.addDefinition({
    "type": "Ext.form.FieldSet",
    "className": "Ext.form.FieldSet",
    "classAlias": "widget.fieldset",
    "inherits": "Ext.Container",
    "mixin": [
        "Ext.form.Borders"
    ],
    "autoName": "MyFieldSet",
    "cfgs": [
        {
            "name": "instructions",
            "type": "string",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        }
    ]
});
