xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Date",
    "className": "Ext.grid.cell.Date",
    "classAlias": "widget.datecell",
    "inherits": "Ext.grid.cell.Text",
    "autoName": "MyDate",
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "bindable": true
        }
    ]
});
