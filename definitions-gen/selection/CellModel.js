xds.component.Registry.addDefinition({
    "type": "Ext.selection.CellModel",
    "className": "Ext.selection.CellModel",
    "classAlias": "selection.cellmodel",
    "inherits": "Ext.selection.DataViewModel",
    "autoName": "MyCellModel",
    "cfgs": [
        {
            "name": "deselectOnContainerClick",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "enableKeyNav",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "mode",
            "type": "string",
            "editor": "options",
            "options": [
                "SINGLE"
            ]
        },
        {
            "name": "preventWrap",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "deselect",
            "params": [
                {
                    "name": "cellmodel",
                    "type": "Ext.selection.CellModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "row",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "column",
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
                    "name": "cellmodel",
                    "type": "Ext.selection.CellModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "row",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Number",
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
