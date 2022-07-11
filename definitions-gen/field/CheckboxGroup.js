xds.component.Registry.addDefinition({
    "type": "Ext.field.CheckboxGroup",
    "className": "Ext.field.CheckboxGroup",
    "classAlias": "widget.checkboxgroup",
    "inherits": "Ext.field.FieldGroupContainer",
    "autoName": "MyCheckboxGroup",
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
