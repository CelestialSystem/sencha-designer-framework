xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.IPAddress",
    "className": "Ext.data.validator.IPAddress",
    "classAlias": "data.validator.ipaddress",
    "inherits": "Ext.data.validator.Format",
    "autoName": "MyIPAddress",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid IP address",
            "bindable": true
        }
    ]
});
