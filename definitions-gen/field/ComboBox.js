xds.component.Registry.addDefinition({
    "type": "Ext.field.ComboBox",
    "className": "Ext.field.ComboBox",
    "classAlias": "widget.combobox",
    "inherits": "Ext.field.Select",
    "autoName": "MyComboBox",
    "typeAlias": [
        "Ext.form.field.ComboBox"
    ],
    "cfgs": [
        {
            "name": "allQuery",
            "type": "string",
            "bindable": true
        },
        {
            "name": "anyMatch",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "autoSelect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "caseSensitive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "editable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "enableRegEx",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "forceSelection",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "minChars",
            "type": "number",
            "bindable": true
        },
        {
            "name": "primaryFilter",
            "type": "function",
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
            "name": "queryCaching",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "queryDelay",
            "type": "number",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "queryMode",
            "type": "string",
            "defaultValue": "remote",
            "bindable": true
        },
        {
            "name": "queryParam",
            "type": "string",
            "defaultValue": "query",
            "bindable": true
        },
        {
            "name": "triggerAction",
            "type": "string",
            "defaultValue": "all",
            "bindable": true
        },
        {
            "name": "typeAhead",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "typeAheadDelay",
            "type": "number",
            "defaultValue": 250,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforepickercreate",
            "params": [
                {
                    "name": "combobox",
                    "type": "Ext.field.ComboBox",
                    "optional": true
                },
                {
                    "name": "newValue",
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
            "name": "beforequery",
            "params": [
                {
                    "name": "queryPlan",
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
            "name": "change",
            "params": [
                {
                    "name": "combobox",
                    "type": "Ext.field.ComboBox",
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
            "name": "pickercreate",
            "params": [
                {
                    "name": "combobox",
                    "type": "Ext.field.ComboBox",
                    "optional": true
                },
                {
                    "name": "picker",
                    "type": "Ext.dataview.List/Ext.Component",
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
                    "name": "combobox",
                    "type": "Ext.field.ComboBox",
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
