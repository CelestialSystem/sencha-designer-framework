xds.component.Registry.addDefinition({
    "type": "Ext.data.Error",
    "className": "Ext.data.Error",
    "inherits": "Ext.Base",
    "autoName": "MyError",
    "cfgs": [
        {
            "name": "field",
            "type": "string",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "bindable": true
        }
    ]
});
