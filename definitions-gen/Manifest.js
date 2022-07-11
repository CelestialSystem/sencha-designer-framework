xds.component.Registry.addDefinition({
    "type": "Ext.Manifest",
    "className": "Ext.Manifest",
    "autoName": "MyManifest",
    "cfgs": [
        {
            "name": "compatibility",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "debug",
            "type": "object"
        },
        {
            "name": "mashup",
            "type": "object"
        },
        {
            "name": "packages",
            "type": "object"
        }
    ]
});
