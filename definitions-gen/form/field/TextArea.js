xds.component.Registry.addDefinition({
    "type": "Ext.form.field.TextArea",
    "className": "Ext.form.field.TextArea",
    "classAlias": "widget.textareafield",
    "inherits": "Ext.form.field.Text",
    "autoName": "MyTextArea",
    "typeAlias": [
        "Ext.form.TextArea"
    ],
    "cfgs": [
        {
            "name": "enterIsSpecial",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "growAppend",
            "type": "string",
            "defaultValue": "\\n-"
        },
        {
            "name": "growMax",
            "type": "number",
            "defaultValue": 1000
        },
        {
            "name": "growMin",
            "type": "number",
            "defaultValue": 60
        },
        {
            "name": "preventScrollbars",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
