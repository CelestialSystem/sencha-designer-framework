xds.component.Registry.addDefinition({
    "type": "Ext.ux.form.MultiSelect",
    "className": "Ext.ux.form.MultiSelect",
    "classAlias": "widget.multiselectfield",
    "inherits": "Ext.form.FieldContainer",
    "mixin": [
        "Ext.util.StoreHolder",
        "Ext.form.field.Field"
    ],
    "autoName": "MyMultiSelect",
    "typeAlias": [
        "Ext.ux.Multiselect"
    ],
    "cfgs": [
        {
            "name": "allowBlank",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "appendOnly",
            "type": "string",
            "defaultValue": false
        },
        {
            "name": "blankText",
            "type": "string",
            "defaultValue": "This field is required"
        },
        {
            "name": "ddReorder",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "delimiter",
            "type": "string",
            "defaultValue": ","
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text"
        },
        {
            "name": "dragGroup",
            "type": "string"
        },
        {
            "name": "dragText",
            "type": "string",
            "defaultValue": "{0} Item{1}"
        },
        {
            "name": "dropGroup",
            "type": "string"
        },
        {
            "name": "listConfig",
            "type": "object"
        },
        {
            "name": "maxSelections",
            "type": "number",
            "defaultValue": 1.7976931348623157e+308
        },
        {
            "name": "maxSelectionsText",
            "type": "string",
            "defaultValue": "Maximum {0}item(s) allowed"
        },
        {
            "name": "minSelections",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "minSelectionsText",
            "type": "string",
            "defaultValue": "Minimum {0}item(s) required"
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "tbar",
            "type": "object",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "title",
            "type": "string"
        },
        {
            "name": "valueField",
            "type": "string",
            "defaultValue": "text"
        }
    ]
});
