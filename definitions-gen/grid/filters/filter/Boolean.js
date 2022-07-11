xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.filter.Boolean",
    "className": "Ext.grid.filters.filter.Boolean",
    "classAlias": "grid.filter.boolean",
    "inherits": "Ext.grid.filters.filter.SingleFilter",
    "autoName": "MyBoolean",
    "cfgs": [
        {
            "name": "defaultValue",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "noText",
            "type": "string",
            "defaultValue": "No"
        },
        {
            "name": "yesText",
            "type": "string",
            "defaultValue": "Yes"
        }
    ]
});
