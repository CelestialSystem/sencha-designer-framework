xds.component.Registry.addDefinition({
    "type": "Ext.util.CollectionKey",
    "className": "Ext.util.CollectionKey",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Identifiable"
    ],
    "autoName": "MyCollectionKey",
    "cfgs": [
        {
            "name": "keyFn",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "property",
            "type": "string",
            "bindable": true
        },
        {
            "name": "rootProperty",
            "type": "string",
            "bindable": true
        }
    ]
});
