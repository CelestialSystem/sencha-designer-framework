xds.component.Registry.addDefinition({
    "type": "Ext.draw.LimitedCache",
    "className": "Ext.draw.LimitedCache",
    "inherits": "Ext.Base",
    "autoName": "MyLimitedCache",
    "cfgs": [
        {
            "name": "feeder",
            "type": "function",
            "bindable": true
        },
        {
            "name": "limit",
            "type": "number",
            "defaultValue": 40,
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        }
    ]
});
