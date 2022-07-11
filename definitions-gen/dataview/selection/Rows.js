xds.component.Registry.addDefinition({
    "type": "Ext.dataview.selection.Rows",
    "className": "Ext.dataview.selection.Rows",
    "classAlias": "selection.rows",
    "inherits": "Ext.dataview.selection.Selection",
    "autoName": "MyRows",
    "cfgs": [
        {
            "name": "selected",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
