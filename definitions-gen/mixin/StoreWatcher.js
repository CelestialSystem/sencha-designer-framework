xds.component.Registry.addDefinition({
    "type": "Ext.mixin.StoreWatcher",
    "className": "Ext.mixin.StoreWatcher",
    "inherits": "Ext.Base",
    "autoName": "MyStoreWatcher",
    "cfgs": [
        {
            "name": "owner",
            "type": "object",
            "bindable": true
        },
        {
            "name": "ownerListeners",
            "type": "object",
            "defaultValue": {
                "destroyable": true,
                "storechange": "onOwnerStoreChange"
            },
            "bindable": true
        },
        {
            "name": "sourceListeners",
            "type": "object",
            "bindable": true
        },
        {
            "name": "storeListeners",
            "type": "object",
            "bindable": true
        }
    ]
});
