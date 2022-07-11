xds.component.Registry.addDefinition({
    "type": "Ext.form.field.Tag",
    "className": "Ext.form.field.Tag",
    "classAlias": "widget.tagfield",
    "inherits": "Ext.form.field.ComboBox",
    "autoName": "MyTag",
    "cfgs": [
        {
            "name": "allowOnlyWhitespace",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "ariaAvailableListLabel",
            "type": "string",
            "defaultValue": "Available values"
        },
        {
            "name": "ariaDeselectedText",
            "type": "string",
            "defaultValue": "{0} removed from selection."
        },
        {
            "name": "ariaHelpText",
            "type": "string",
            "defaultValue": "Use Up and Down arrows to view available values, Enter to select. Use Left and Right arrows to view selected values, Delete key to deselect."
        },
        {
            "name": "ariaHelpTextEditable",
            "type": "string",
            "defaultValue": "Use Up and Down arrows to view available values, Enter to select. Type and press Enter to create a new value. Use Left and Right arrows to view selected values, Delete key to deselect."
        },
        {
            "name": "ariaNoneSelectedText",
            "type": "string",
            "defaultValue": "No value selected."
        },
        {
            "name": "ariaSelectedListLabel",
            "type": "string",
            "defaultValue": "Selected values"
        },
        {
            "name": "ariaSelectedText",
            "type": "string",
            "defaultValue": "Selected {0}."
        },
        {
            "name": "clearOnBackspace",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "createNewOnBlur",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "createNewOnEnter",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "delimiter",
            "type": "string",
            "defaultValue": ",",
            "bindable": true
        },
        {
            "name": "encodeSubmitValue",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "filterPickList",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "forceSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "grow",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "growMax",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false
        },
        {
            "name": "growMin",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false
        },
        {
            "name": "growToLongestValue",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "labelTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "multiSelect",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "selectOnFocus",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stacked",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tipTpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "triggerOnClick",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "valueParam",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "autosize",
            "params": [
                {
                    "name": "tagfield",
                    "type": "Ext.form.field.Tag",
                    "optional": true
                },
                {
                    "name": "height",
                    "type": "Number",
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
