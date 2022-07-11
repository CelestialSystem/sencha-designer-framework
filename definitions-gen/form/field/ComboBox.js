xds.component.Registry.addDefinition({
    "type": "Ext.form.field.ComboBox",
    "className": "Ext.form.field.ComboBox",
    "classAlias": "widget.combobox",
    "inherits": "Ext.form.field.Picker",
    "mixin": [
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyComboBox",
    "typeAlias": [
        "Ext.form.ComboBox"
    ],
    "cfgs": [
        {
            "name": "allQuery",
            "type": "string"
        },
        {
            "name": "anyMatch",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "autoLoadOnValue",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "autoSelect",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "autoSelectLast",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "caseSensitive",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "childEls",
            "type": "object",
            "defaultValue": {
                "hiddenDataEl": true
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "clearFilterOnBlur",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "defaultListConfig",
            "type": "object",
            "defaultValue": {
                "loadingHeight": 70,
                "minWidth": 70,
                "maxHeight": 300,
                "shadow": "sides"
            }
        },
        {
            "name": "displayField",
            "type": "string",
            "defaultValue": "text",
            "bindable": true
        },
        {
            "name": "displayTpl",
            "type": "template",
            "bindable": true
        },
        {
            "name": "enableRegEx",
            "type": "boolean"
        },
        {
            "name": "forceSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "growToLongestValue",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "hiddenName",
            "type": "string"
        },
        {
            "name": "listConfig",
            "type": "object"
        },
        {
            "name": "minChars",
            "type": "number"
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "publishes",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "queryCaching",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "queryDelay",
            "type": "number"
        },
        {
            "name": "queryMode",
            "type": "string",
            "defaultValue": "remote"
        },
        {
            "name": "queryParam",
            "type": "string",
            "defaultValue": "query"
        },
        {
            "name": "selection",
            "type": "object",
            "bindable": true
        },
        {
            "name": "selectOnTab",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "transform",
            "type": "string"
        },
        {
            "name": "transformInPlace",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "triggerAction",
            "type": "string",
            "defaultValue": "all"
        },
        {
            "name": "triggerCls",
            "type": "string",
            "defaultValue": "x-form-arrow-trigger"
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": [
                "selection"
            ],
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "typeAhead",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "typeAheadDelay",
            "type": "number",
            "defaultValue": 250
        },
        {
            "name": "valueField",
            "type": "string"
        },
        {
            "name": "valueNotFoundText",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforedeselect",
            "params": [
                {
                    "name": "combo",
                    "type": "Ext.form.field.ComboBox",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Record",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
            "name": "beforeselect",
            "params": [
                {
                    "name": "combo",
                    "type": "Ext.form.field.ComboBox",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Record",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Number",
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
                    "name": "combo",
                    "type": "Ext.form.field.ComboBox",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model/Ext.data.Model[]",
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
