xds.component.Registry.addDefinition({
    "type": "Ext.field.TextArea",
    "className": "Ext.field.TextArea",
    "classAlias": "widget.textareafield",
    "inherits": "Ext.field.Text",
    "autoName": "MyTextArea",
    "typeAlias": [
        "Ext.form.TextArea"
    ],
    "cfgs": [
        {
            "name": "autoCapitalize",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "clearable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "maxRows",
            "type": "number",
            "bindable": true
        }
    ]
});
