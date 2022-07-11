xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.Summary",
    "className": "Ext.grid.plugin.Summary",
    "classAlias": "plugin.gridsummary",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.mixin.Bufferable",
        "Ext.mixin.StoreWatcher"
    ],
    "autoName": "MySummary",
    "typeAlias": [
        "Ext.grid.plugin.SummaryRow"
    ],
    "cfgs": [
        {
            "name": "row",
            "type": "object",
            "defaultValue": {
                "xtype": "gridsummaryrow",
                "docked": "bottom"
            },
            "bindable": true
        }
    ]
});
