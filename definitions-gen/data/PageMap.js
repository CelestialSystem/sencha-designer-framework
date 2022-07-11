xds.component.Registry.addDefinition({
    "type": "Ext.data.PageMap",
    "className": "Ext.data.PageMap",
    "inherits": "Ext.util.LruCache",
    "autoName": "MyPageMap",
    "cfgs": [
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "rootProperty",
            "type": "string",
            "bindable": true
        }
    ]
});
