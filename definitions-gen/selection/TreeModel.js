xds.component.Registry.addDefinition({
    "type": "Ext.selection.TreeModel",
    "className": "Ext.selection.TreeModel",
    "classAlias": "selection.treemodel",
    "inherits": "Ext.selection.RowModel",
    "autoName": "MyTreeModel",
    "cfgs": [
        {
            "name": "pruneRemoved",
            "type": "boolean",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "selectOnExpanderClick",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
