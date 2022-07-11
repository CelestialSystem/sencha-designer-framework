xds.component.Registry.addDefinition({
    "type": "Ext.tree.Column",
    "className": "Ext.tree.Column",
    "classAlias": "widget.treecolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyColumn",
    "cfgs": [
        {
            "name": "renderer",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metaData",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "rowIndex",
                    "type": "Number"
                },
                {
                    "name": "colIndex",
                    "type": "Number"
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
