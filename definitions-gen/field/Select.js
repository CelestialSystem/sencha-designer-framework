xds.component.Registry.addDefinition({
    "type": "Ext.field.Select",
    "className": "Ext.field.Select",
    "classAlias": "widget.selectfield",
    "inherits": "Ext.field.Picker",
    "autoName": "MySelect",
    "typeAlias": [
        "Ext.form.Select"
    ],
    "cfgs": [
        {
            "name": "autoFocus",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoFocusLast",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoLoadOnValue",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "autoSelect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "string",
                    "editor": "options",
                    "options": [
                        "initial"
                    ]
                }
            ]
        },
        {
            "name": "chipView",
            "type": "object",
            "defaultValue": {
                "xtype": "chipview",
                "tabIndex": null,
                "focusable": false,
                "itemsFocusable": false,
                "focusedCls": "",
                "navigationModel": "fieldchipview",
                "selectable": {
                    "mode": "multi"
                },
                "closable": true,
                "closeHandler": "up.onChipCloseTap"
            },
            "bindable": true
        },
        {
            "name": "collapseOnSelect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "delimiter",
            "type": "string",
            "defaultValue": ",",
            "bindable": true
        },
        {
            "name": "displayField",
            "type": "auto",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "displayTpl",
            "type": "template",
            "bindable": true
        },
        {
            "name": "edgePicker",
            "type": "object",
            "defaultValue": {
                "xtype": "selectpicker",
                "cover": true
            },
            "bindable": true
        },
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "floatedPicker",
            "type": "object",
            "defaultValue": {
                "xtype": "boundlist",
                "infinite": false,
                "navigationModel": {
                    "disabled": true
                },
                "scrollToTopOnRefresh": false,
                "loadingHeight": 70,
                "maxHeight": 300,
                "floated": true,
                "axisLock": true,
                "hideAnimation": null
            },
            "bindable": true
        },
        {
            "name": "hiddenName",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "itemTpl",
            "type": "template",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "multiSelect",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "options",
            "type": "array",
            "bindable": true
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "recordCreator",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "value",
                    "type": "String"
                },
                {
                    "name": "model",
                    "type": "ObExt.data.Model"
                },
                {
                    "name": "field",
                    "type": "Ext.field.Select"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "recordCreatorScope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selectOnTab",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "selection": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "valueField",
            "type": "auto",
            "defaultValue": "value",
            "bindable": true
        },
        {
            "name": "valueNotFoundText",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "change",
            "params": [
                {
                    "name": "selectfield",
                    "type": "Ext.field.Select",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "oldValue",
                    "type": "Ext.data.Model",
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
            "name": "focus",
            "params": [
                {
                    "name": "selectfield",
                    "type": "Ext.field.Select",
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
            "name": "select",
            "params": [
                {
                    "name": "selectfield",
                    "type": "Ext.field.Select",
                    "optional": true
                },
                {
                    "name": "newValue",
                    "type": "Ext.data.Model",
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
