xds.component.Registry.addDefinition({
    "type": "Ext.Decorator",
    "className": "Ext.Decorator",
    "inherits": "Ext.Component",
    "autoName": "MyDecorator",
    "cfgs": [
        {
            "name": "component",
            "type": "object",
            "defaultValue": {
                "xtype": "component"
            },
            "bindable": true
        }
    ]
});
