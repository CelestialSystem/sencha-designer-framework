xds.component.Registry.addDefinition({
    "type": "Ext.form.Panel",
    "className": "Ext.form.Panel",
    "classAlias": "widget.formpanel",
    "inherits": "Ext.field.Panel",
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.form.FormPanel"
    ],
    "cfgs": [
        {
            "name": "enableSubmissionForm",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "enctype",
            "type": "string",
            "bindable": true
        },
        {
            "name": "method",
            "type": "string",
            "defaultValue": "post",
            "bindable": true
        },
        {
            "name": "multipartDetection",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "standardSubmit",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "submitOnAction",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "trackResetOnLoad",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "fieldDefaults",
            "type": "object"
        },
        {
            "name": "jsonSubmit",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforesubmit",
            "params": [
                {
                    "name": "formpanel",
                    "type": "Ext.form.Panel",
                    "optional": true
                },
                {
                    "name": "values",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "options",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "submit",
            "params": [
                {
                    "name": "formpanel",
                    "type": "Ext.form.Panel",
                    "optional": true
                },
                {
                    "name": "result",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
