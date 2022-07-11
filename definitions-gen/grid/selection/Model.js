xds.component.Registry.addDefinition({
    "type": "Ext.grid.selection.Model",
    "className": "Ext.grid.selection.Model",
    "classAlias": "selmodel.grid",
    "inherits": "Ext.dataview.selection.Model",
    "autoName": "MyModel",
    "cfgs": [
        {
            "name": "cells",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "checkbox",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "checkboxColumnIndex",
            "type": "auto",
            "defaultValue": 0
        },
        {
            "name": "checkboxDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "selectioncolumn",
                "text": null,
                "width": 30
            },
            "bindable": true
        },
        {
            "name": "checkboxSelect",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "columns",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "drag",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "extensible",
            "type": "string",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "headerCheckbox",
            "type": "boolean",
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
            "name": "rows",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
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
                    "type": "Ext.dataview.selection.Selection",
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
