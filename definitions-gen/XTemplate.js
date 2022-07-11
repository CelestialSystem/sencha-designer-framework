xds.component.Registry.addDefinition({
    "type": "Ext.XTemplate",
    "className": "Ext.XTemplate",
    "inherits": "Ext.Template",
    "autoName": "MyXTemplate",
    "cfgs": [
        {
            "name": "compiled",
            "type": "boolean",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "definitions",
            "type": "string",
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "strict",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
