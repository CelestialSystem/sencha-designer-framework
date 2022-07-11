xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.Plugin",
    "className": "Ext.grid.filters.Plugin",
    "classAlias": "plugin.gridfilters",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.state.Stateful",
        "Ext.mixin.StoreWatcher"
    ],
    "autoName": "MyPlugin"
});
