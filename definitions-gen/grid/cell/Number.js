xds.component.Registry.addDefinition({
    "type": "Ext.grid.cell.Number",
    "className": "Ext.grid.cell.Number",
    "classAlias": "widget.numbercell",
    "inherits": "Ext.grid.cell.Text",
    "autoName": "MyNumber",
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "defaultValue": "0,000.00",
            "bindable": true
        }
    ]
});
