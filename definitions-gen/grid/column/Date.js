xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Date",
    "className": "Ext.grid.column.Date",
    "classAlias": "widget.datecolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyDate",
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "bindable": true
        }
    ]
});
