xds.component.Registry.addDefinition({
    "type": "Ext.grid.filters.menu.Base",
    "className": "Ext.grid.filters.menu.Base",
    "inherits": "Ext.menu.CheckItem",
    "mixin": [
        "Ext.mixin.Bufferable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "text",
            "type": "string",
            "defaultValue": "Filter",
            "bindable": true
        }
    ]
});
