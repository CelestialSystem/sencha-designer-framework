xds.component.Registry.addDefinition({
    "type": "Ext.util.LruCache",
    "className": "Ext.util.LruCache",
    "inherits": "Ext.util.HashMap",
    "autoName": "MyLruCache",
    "cfgs": [
        {
            "name": "maxSize",
            "type": "number",
            "bindable": true
        }
    ]
});
