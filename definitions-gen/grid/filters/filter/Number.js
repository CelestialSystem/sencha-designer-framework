xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.filter.Number",
    "className": "Ext.grid.filters.filter.Number",
    "classAlias": "grid.filter.number",
    "inherits": "Ext.grid.filters.filter.TriFilter",
    "autoName": "MyNumber",
    "cfgs": [
        {
            "name": "emptyText",
            "type": "string",
            "defaultValue": "Enter Number..."
        },
        {
            "name": "fields",
            "type": "object",
            "defaultValue": {
                "gt": {
                    "iconCls": "x-grid-filters-gt",
                    "margin": "0 0 3px 0"
                },
                "lt": {
                    "iconCls": "x-grid-filters-lt",
                    "margin": "0 0 3px 0"
                },
                "eq": {
                    "iconCls": "x-grid-filters-eq",
                    "margin": 0
                }
            },
            "bindable": true
        }
    ]
});
