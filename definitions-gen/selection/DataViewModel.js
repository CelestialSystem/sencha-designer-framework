xds.component.Registry.addDefinition({
    "type": "Ext.selection.DataViewModel",
    "className": "Ext.selection.DataViewModel",
    "classAlias": "selection.dataviewmodel",
    "inherits": "Ext.selection.Model",
    "autoName": "MyDataViewModel",
    "eventDefs": [
        {
            "name": "beforedeselect",
            "params": [
                {
                    "name": "dataviewmodel",
                    "type": "Ext.selection.DataViewModel",
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
                    "name": "dataviewmodel",
                    "type": "Ext.selection.DataViewModel",
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
                    "name": "dataviewmodel",
                    "type": "Ext.selection.DataViewModel",
                    "optional": true
                },
                {
                    "name": "record",
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
            "name": "select",
            "params": [
                {
                    "name": "dataviewmodel",
                    "type": "Ext.selection.DataViewModel",
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
