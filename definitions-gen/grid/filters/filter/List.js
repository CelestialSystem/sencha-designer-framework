xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.filter.List",
    "className": "Ext.grid.filters.filter.List",
    "classAlias": "grid.filter.list",
    "inherits": "Ext.grid.filters.filter.SingleFilter",
    "autoName": "MyList",
    "cfgs": [
        {
            "name": "idField",
            "type": "string",
            "defaultValue": "id"
        },
        {
            "name": "itemDefaults",
            "type": "object",
            "defaultValue": {
                "checked": false,
                "hideOnClick": false
            },
            "bindable": true
        },
        {
            "name": "labelField",
            "type": "string",
            "defaultValue": "text"
        },
        {
            "name": "labelIndex",
            "type": "string"
        },
        {
            "name": "loadingText",
            "type": "string",
            "defaultValue": "Loading..."
        },
        {
            "name": "loadOnShow",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "options",
            "type": "array"
        },
        {
            "name": "single",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "store",
            "type": "object"
        }
    ]
});
