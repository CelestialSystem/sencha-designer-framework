xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.CellEditing",
    "className": "Ext.grid.plugin.CellEditing",
    "classAlias": "plugin.cellediting",
    "inherits": "Ext.grid.plugin.Editing",
    "autoName": "MyCellEditing",
    "eventDefs": [
        {
            "name": "beforeedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.CellEditing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "canceledit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.CellEditing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "edit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.CellEditing",
                    "optional": true
                },
                {
                    "name": "context",
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
            "name": "validateedit",
            "params": [
                {
                    "name": "editor",
                    "type": "Ext.grid.plugin.CellEditing",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
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
