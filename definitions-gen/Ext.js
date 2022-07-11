xds.component.Registry.addDefinition({
    "type": "Ext",
    "className": "Ext",
    "autoName": "MyExt",
    "cfgs": [
        {
            "name": "debugConfig",
            "type": "object",
            "defaultValue": {
                "hooks": {
                    "*": true
                }
            }
        },
        {
            "name": "enableKeyboardMode",
            "type": "boolean"
        },
        {
            "name": "manifest",
            "type": "string",
            "defaultValue": "manifest"
        }
    ]
});
