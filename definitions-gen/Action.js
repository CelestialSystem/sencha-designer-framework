xds.component.Registry.addDefinition({
    "type": "Ext.Action",
    "className": "Ext.Action",
    "inherits": "Ext.Base",
    "autoName": "MyAction",
    "cfgs": [
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "glyph",
            "type": "auto"
        },
        {
            "name": "handler",
            "type": "string",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "iconCls",
            "type": "string"
        },
        {
            "name": "itemId",
            "type": "string"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "text",
            "type": "string"
        }
    ]
});
