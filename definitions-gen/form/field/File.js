xds.component.Registry.addDefinition({
    "type": "Ext.form.field.File",
    "className": "Ext.form.field.File",
    "classAlias": "widget.filefield",
    "inherits": "Ext.form.field.Text",
    "autoName": "MyFile",
    "typeAlias": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
    ],
    "cfgs": [
        {
            "name": "accept",
            "type": "string"
        },
        {
            "name": "buttonConfig",
            "type": "object"
        },
        {
            "name": "buttonMargin",
            "type": "number",
            "defaultValue": 3
        },
        {
            "name": "buttonOnly",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "buttonText",
            "type": "string",
            "defaultValue": "Browse..."
        },
        {
            "name": "clearOnSubmit",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "emptyText",
            "type": "string",
            "bindable": true
        },
        {
            "name": "readOnly",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "submitValue",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "triggers",
            "type": "object",
            "defaultValue": {
                "filebutton": {
                    "type": "component",
                    "hideOnReadOnly": false,
                    "preventMouseDown": false
                }
            },
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "filefield",
                    "type": "Ext.ux.form.FileUploadField",
                    "optional": true
                },
                {
                    "name": "value",
                    "type": "String",
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
