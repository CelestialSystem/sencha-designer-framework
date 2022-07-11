xds.component.Registry.addDefinition({
    "type": "Ext.ux.rating.Picker",
    "className": "Ext.ux.rating.Picker",
    "classAlias": "widget.rating",
    "inherits": "Ext.Widget",
    "autoName": "MyPicker",
    "cfgs": [
        {
            "name": "animate",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "family",
            "type": "string",
            "defaultValue": "monospace",
            "bindable": true
        },
        {
            "name": "glyphs",
            "type": "string",
            "defaultValue": "☆★",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "limit",
            "type": "number",
            "defaultValue": 5,
            "bindable": true
        },
        {
            "name": "minimum",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "overStyle",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "rounding",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "scale",
            "type": "string",
            "defaultValue": "125%",
            "bindable": true
        },
        {
            "name": "selectedStyle",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "tip",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                },
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "trackOver",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true
        }
    ]
});
