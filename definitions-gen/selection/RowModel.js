xds.component.Registry.addDefinition({
    "type": "Ext.selection.RowModel",
    "className": "Ext.selection.RowModel",
    "classAlias": "selection.rowmodel",
    "inherits": "Ext.selection.DataViewModel",
    "autoName": "MyRowModel",
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
        }
    ],
    "eventDefs": [
        {
            "name": "beforedeselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
            "name": "beforeselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
            "name": "deselect",
            "params": [
                {
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
                    "name": "rowmodel",
                    "type": "Ext.selection.RowModel",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
        }
    ]
});
