xds.component.Registry.addDefinition({
    "type": "Ext.pivot.plugin.CellEditing",
    "className": "Ext.pivot.plugin.CellEditing",
    "classAlias": "plugin.pivotcellediting",
    "inherits": "Ext.grid.plugin.CellEditing",
    "autoName": "MyCellEditing",
    "cfgs": [
        {
            "name": "defaultUpdater",
            "type": "string",
            "defaultValue": "uniform"
        },
        {
            "name": "defaultValue",
            "type": "auto"
        }
    ],
    "eventDefs": [
        {
            "name": "pivotbeforeupdate",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
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
            "name": "pivotupdate",
            "params": [
                {
                    "name": "updater",
                    "type": "Ext.pivot.update.Base",
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
