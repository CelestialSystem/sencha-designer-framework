xds.component.Registry.addDefinition({
    "type": "Ext.field.RadioGroup",
    "className": "Ext.field.RadioGroup",
    "classAlias": "widget.radiogroup",
    "inherits": "Ext.field.FieldGroupContainer",
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
            "defaultValue": "You must select at least one item in this group"
        },
        {
            "name": "columns",
            "type": "string",
            "defaultValue": "auto",
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "items",
            "type": "array"
        },
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "vertical",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
