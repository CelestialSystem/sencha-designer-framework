xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.Filters",
    "className": "Ext.grid.filters.Filters",
    "classAlias": "plugin.gridfilters",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.util.StoreHolder"
    ],
    "autoName": "MyFilters",
    "cfgs": [
        {
            "name": "menuFilterText",
            "type": "string",
            "defaultValue": "Filters"
        },
        {
            "name": "showMenu",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stateId",
            "type": "string"
        }
    ]
});
