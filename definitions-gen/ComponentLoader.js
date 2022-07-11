xds.component.Registry.addDefinition({
    "type": "Ext.ComponentLoader",
    "className": "Ext.ComponentLoader",
    "inherits": "Ext.ElementLoader",
    "autoName": "MyComponentLoader",
    "cfgs": [
        {
            "name": "loadMask",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "loadOnRender",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "renderer",
            "type": "string",
            "defaultValue": "html",
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "rendererScope",
            "type": "object",
            "defaultValue": "this"
        },
        {
            "name": "scripts",
            "type": "boolean"
        },
        {
            "name": "target",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
