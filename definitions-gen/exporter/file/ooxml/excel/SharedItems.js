xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.ooxml.excel.SharedItems",
    "className": "Ext.exporter.file.ooxml.excel.SharedItems",
    "inherits": "Ext.exporter.file.ooxml.Base",
    "autoName": "MySharedItems",
    "cfgs": [
        {
            "name": "containsBlank",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsDate",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsInteger",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsMixedTypes",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsNonDate",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsNumber",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsSemiMixedTypes",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "containsString",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "generateTplAttributes",
            "type": "object",
            "defaultValue": true
        },
        {
            "name": "items",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "date"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "longText",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "maxDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "maxValue",
            "type": "number",
            "bindable": true
        },
        {
            "name": "minDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "minValue",
            "type": "number",
            "bindable": true
        }
    ]
});
