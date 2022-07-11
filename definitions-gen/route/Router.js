xds.component.Registry.addDefinition({
    "type": "Ext.route.Router",
    "className": "Ext.route.Router",
    "inherits": "Ext.Base",
    "autoName": "MyRouter",
    "cfgs": [
        {
            "name": "hashBang",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "multipleToken",
            "type": "string",
            "defaultValue": "|",
            "bindable": true
        },
        {
            "name": "queueRoutes",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
