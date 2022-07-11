xds.component.Registry.addDefinition({
    "type": "Ext.picker.Picker",
    "className": "Ext.picker.Picker",
    "classAlias": "widget.picker",
    "inherits": "Ext.Sheet",
    "autoName": "MyPicker",
    "typeAlias": [
        "Ext.Picker"
    ],
    "cfgs": [
        {
            "name": "bottom",
            "type": "auto",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "cancelButton",
            "type": "string",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "centered",
            "type": "object",
            "defaultValue": false,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "doneButton",
            "type": "string",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "floated",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "height",
            "type": "number",
            "defaultValue": 220,
            "bindable": true
        },
        {
            "name": "layout",
            "type": "object",
            "defaultValue": {
                "type": "hbox",
                "align": "stretch"
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "left",
            "type": "auto",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "right",
            "type": "auto",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "side",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "slots",
            "type": "array",
            "bindable": true
        },
        {
            "name": "tabIndex",
            "type": "number",
            "defaultValue": -1,
            "bindable": true
        },
        {
            "name": "toolbar",
            "type": "object",
            "defaultValue": {
                "xtype": "titlebar"
            },
            "bindable": true
        },
        {
            "name": "useTitles",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "value",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "cancel",
            "params": [
                {
                    "name": "picker",
                    "type": "Ext.Picker",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "change",
            "params": [
                {
                    "name": "picker",
                    "type": "Ext.picker.Picker",
                    "optional": true
                },
                {
                    "name": "values",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "pick",
            "params": [
                {
                    "name": "picker",
                    "type": "Ext.Picker",
                    "optional": true
                },
                {
                    "name": "values",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "slot",
                    "type": "Ext.picker.Slot",
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
