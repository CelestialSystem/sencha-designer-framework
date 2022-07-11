xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.filter.Base",
    "className": "Ext.grid.filters.filter.Base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "active",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "dataIndex",
            "type": "string"
        },
        {
            "name": "itemDefaults",
            "type": "object",
            "bindable": true
        },
        {
            "name": "serializer",
            "type": "function",
            "bindable": true
        },
        {
            "name": "updateBuffer",
            "type": "number",
            "defaultValue": 500,
            "bindable": true
        }
    ]
});
