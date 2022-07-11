xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Selection",
    "className": "Ext.grid.column.Selection",
    "classAlias": "widget.selectioncolumn",
    "inherits": "Ext.grid.column.Check",
    "autoName": "MySelection",
    "cfgs": [
        {
            "name": "stopSelection",
            "type": "string",
            "defaultValue": false,
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        }
    ]
});
