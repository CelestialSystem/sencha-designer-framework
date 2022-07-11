xds.component.Registry.addDefinition({
    "type": "Ext.field.Panel",
    "className": "Ext.field.Panel",
    "classAlias": "widget.fieldpanel",
    "inherits": "Ext.Panel",
    "mixin": [
        "Ext.field.Manager",
        "Ext.form.Borders"
    ],
    "autoName": "MyPanel",
    "cfgs": [
        {
            "name": "api",
            "type": "object",
            "bindable": true
        },
        {
            "name": "baseParams",
            "type": "object",
            "bindable": true
        },
        {
            "name": "nameable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "nameHolder",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "paramOrder",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "paramsAsHash",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "scrollable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "shareableName",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "exception",
            "params": [
                {
                    "name": "fieldpanel",
                    "type": "Ext.field.Panel",
                    "optional": true
                },
                {
                    "name": "result",
                    "type": "Object",
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
