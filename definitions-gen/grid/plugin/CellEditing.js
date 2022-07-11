xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.CellEditing",
    "className": "Ext.grid.plugin.CellEditing",
    "classAlias": "plugin.gridcellediting",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyCellEditing",
    "cfgs": [
        {
            "name": "selectOnEdit",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "triggerEvent",
            "type": "string",
            "defaultValue": "doubletap",
            "bindable": true
        }
    ]
});
