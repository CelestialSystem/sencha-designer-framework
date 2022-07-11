xds.component.Registry.addDefinition({
    "type": "Ext.field.Field",
    "className": "Ext.field.Field",
    "classAlias": "widget.field",
    "inherits": "Ext.Component",
    "autoName": "MyField",
    "typeAlias": [
        "Ext.form.Field"
    ],
    "cfgs": [
        {
            "name": "autoFitErrors",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "bodyAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "end",
                "start",
                "stretch"
            ],
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "error",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "errorMessage",
            "type": "string",
            "bindable": true
        },
        {
            "name": "errorTarget",
            "type": "string",
            "defaultValue": "qtip",
            "bindable": true
        },
        {
            "name": "errorTip",
            "type": "object",
            "bindable": true
        },
        {
            "name": "errorTpl",
            "type": "template",
            "bindable": true
        },
        {
            "name": "fullscreen",
            "type": "boolean",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "inline",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "label",
            "type": "string",
            "bindable": true
        },
        {
            "name": "labelAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "labelCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "labelMinWidth",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "labelTextAlign",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "labelWidth",
            "type": "auto",
            "bindable": true
        },
        {
            "name": "labelWrap",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "required",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "requiredMessage",
            "type": "string",
            "defaultValue": "This field is required",
            "bindable": true
        },
        {
            "name": "validateDisabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "validationMessage",
            "type": "string",
            "defaultValue": "Is in the wrong format",
            "bindable": true
        },
        {
            "name": "validators",
            "type": "object",
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
            "name": "change",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.field.Field",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "String",
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
            "name": "click",
            "params": [
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
            "name": "errorchange",
            "params": [
                {
                    "name": "field",
                    "type": "Ext.field.Field",
                    "optional": true
                },
                {
                    "name": "error",
                    "type": "String",
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
            "name": "keyup",
            "params": [
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
            "name": "mousedown",
            "params": [
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
            "name": "paste",
            "params": [
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
