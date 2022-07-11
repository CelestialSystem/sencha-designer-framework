xds.component.Registry.addDefinition({
    "type": "Ext.ux.dd.CellFieldDropZone",
    "className": "Ext.ux.dd.CellFieldDropZone",
    "classAlias": "plugin.ux-cellfielddropzone",
    "inherits": "Ext.dd.DropZone",
    "autoName": "MyCellFieldDropZone",
    "cfgs": [
        {
            "name": "onCellDrop",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
