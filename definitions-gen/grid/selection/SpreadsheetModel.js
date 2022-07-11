xds.component.Registry.addDefinition({
    "type": "Ext.grid.selection.SpreadsheetModel",
    "className": "Ext.grid.selection.SpreadsheetModel",
    "classAlias": "selection.spreadsheet",
    "inherits": "Ext.selection.Model",
    "autoName": "MySpreadsheetModel",
    "cfgs": [
        {
            "name": "cellSelect",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "checkboxColumnIndex",
            "type": "auto",
            "defaultValue": 0
        },
        {
            "name": "checkboxHeaderWidth",
            "type": "auto",
            "defaultValue": 24
        },
        {
            "name": "checkboxSelect",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "checkColumnHeaderText",
            "type": "string"
        },
        {
            "name": "columnSelect",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "dragSelect",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "extensible",
            "type": "string",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "reducible",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "rowNumbererHeaderWidth",
            "type": "auto",
            "defaultValue": 46
        },
        {
            "name": "rowSelect",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "selected",
            "type": "object",
            "bindable": true
        },
        {
            "name": "showHeaderCheckbox",
            "type": "boolean",
            "defaultValue": true
        }
    ],
    "eventDefs": [
        {
            "name": "selectionchange",
            "params": [
                {
                    "name": "grid",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "selection",
                    "type": "Ext.grid.selection.Selection",
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
