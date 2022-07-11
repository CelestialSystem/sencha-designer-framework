xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.RowNumberer",
    "className": "Ext.grid.cell.RowNumberer",
    "classAlias": "widget.rownumberercell",
    "inherits": "Ext.grid.cell.Number",
    "autoName": "MyRowNumberer",
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
