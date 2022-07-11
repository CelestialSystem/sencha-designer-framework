xds.component.Registry.addDefinition({
    "type": "Ext.form.RadioGroup",
    "className": "Ext.form.RadioGroup",
    "classAlias": "widget.radiogroup",
    "inherits": "Ext.form.CheckboxGroup",
    "autoName": "MyRadioGroup",
    "cfgs": [
        {
            "name": "allowBlank",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "blankText",
            "type": "string",
            "defaultValue": "You must select one item in this group"
        },
        {
            "name": "items",
            "type": "array"
        },
        {
            "name": "local",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "simpleValue",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
