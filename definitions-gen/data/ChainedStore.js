xds.component.Registry.addDefinition({
    "type": "Ext.data.ChainedStore",
    "className": "Ext.data.ChainedStore",
    "classAlias": "store.chained",
    "inherits": "Ext.data.AbstractStore",
    "mixin": [
        "Ext.data.LocalStore"
    ],
    "autoName": "MyChainedStore",
    "cfgs": [
        {
            "name": "source",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
