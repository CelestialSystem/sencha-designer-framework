xds.component.Registry.addDefinition({
    "type": "Ext.data.virtual.PageMap",
    "className": "Ext.data.virtual.PageMap",
    "inherits": "Ext.Base",
    "autoName": "MyPageMap",
    "cfgs": [
        {
            "name": "cacheSize",
            "type": "number",
            "defaultValue": 10,
            "bindable": true
        },
        {
            "name": "concurrentLoading",
            "type": "number",
            "defaultValue": 1,
            "bindable": true
        },
        {
            "name": "pageCount",
            "type": "object",
            "bindable": true
        }
    ]
});
