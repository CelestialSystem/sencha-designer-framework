xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.RowDragDrop",
    "className": "Ext.grid.plugin.RowDragDrop",
    "autoName": "MyRowDragDrop",
    "classAlias": "plugin.rowdragdrop",
    "inherits": "Ext.plugin.dd.DragDrop",
    "autoName": "MyRowDragDrop",

    "cfgs": [{
        "name": "dragText",
        "type": "string",
        "defaultValue": "{0} selected node{1}"
    },
    {
        "name": "dragIcon",
        "type": "boolean",
        "defaultValue": (Ext.supports.Touch && Ext.supports.TouchEvents) ? true : false
    },
    {
        "name": "copy",
        "type": "boolean",
        "defaultValue": false
    }]
});
