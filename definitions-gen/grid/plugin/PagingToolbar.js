xds.component.Registry.addDefinition({
    "type": "Ext.grid.plugin.PagingToolbar",
    "className": "Ext.grid.plugin.PagingToolbar",
    "classAlias": "plugin.pagingtoolbar",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.mixin.Hookable"
    ],
    "autoName": "MyPagingToolbar",
    "cfgs": [
        {
            "name": "buffer",
            "type": "number",
            "defaultValue": 250,
            "bindable": true,
            "alternates": [
                {
                    "type": "string",
                    "editor": "options",
                    "options": [
                        "dragend"
                    ]
                }
            ]
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
