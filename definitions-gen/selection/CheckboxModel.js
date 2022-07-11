xds.component.Registry.addDefinition({
    "type": "Ext.selection.CheckboxModel",
    "className": "Ext.selection.CheckboxModel",
    "classAlias": "selection.checkboxmodel",
    "inherits": "Ext.selection.RowModel",
    "autoName": "MyCheckboxModel",
    "cfgs": [
        {
            "name": "checkOnly",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "editRenderer",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metaData",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "rowIndex",
                    "type": "Number"
                },
                {
                    "name": "colIndex",
                    "type": "Number"
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "headerAriaLabel",
            "type": "string",
            "defaultValue": "Row selector"
        },
        {
            "name": "headerDeselectText",
            "type": "string",
            "defaultValue": "Press Space to deselect all rows"
        },
        {
            "name": "headerSelectText",
            "type": "string",
            "defaultValue": "Press Space to select all rows"
        },
        {
            "name": "headerText",
            "type": "string"
        },
        {
            "name": "injectCheckbox",
            "type": "auto",
            "defaultValue": 0
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "MULTI",
                "SIMPLE",
                "SINGLE"
            ],
            "defaultValue": "MULTI"
        },
        {
            "name": "renderer",
            "type": "function",
            "defaultValue": false,
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metaData",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "rowIndex",
                    "type": "Number"
                },
                {
                    "name": "colIndex",
                    "type": "Number"
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "rowDeselectText",
            "type": "string",
            "defaultValue": "Press Space to deselect this row"
        },
        {
            "name": "rowSelectText",
            "type": "string",
            "defaultValue": "Press Space to select this row"
        },
        {
            "name": "showHeaderCheckbox",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
