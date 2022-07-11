xds.component.Registry.addDefinition({
    "type": "Ext.dataview.plugin.ItemTip",
    "className": "Ext.dataview.plugin.ItemTip",
    "classAlias": "plugin.dataviewtip",
    "inherits": "Ext.tip.ToolTip",
    "autoName": "MyItemTip",
    "cfgs": [
        {
            "name": "constrainToView",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
