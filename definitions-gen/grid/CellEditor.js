xds.component.Registry.addDefinition({
    "type": "Ext.grid.CellEditor",
    "className": "Ext.grid.CellEditor",
    "classAlias": "widget.celleditor",
    "inherits": "Ext.Editor",
    "autoName": "MyCellEditor",
    "cfgs": [
        {
            "name": "autoPin",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
