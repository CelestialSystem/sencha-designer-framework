xds.component.Registry.addDefinition({
    "type": "Ext.data.validator.CIDRv4",
    "className": "Ext.data.validator.CIDRv4",
    "classAlias": "data.validator.cidrv4",
    "inherits": "Ext.data.validator.Format",
    "autoName": "MyCIDRv4",
    "cfgs": [
        {
            "name": "matcher",
            "type": "regex",
            "defaultValue": "/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\\/([0-9]|[1-2][0-9]|3[0-2]))$/",
            "bindable": true
        },
        {
            "name": "message",
            "type": "string",
            "defaultValue": "Is not a valid CIDR block",
            "bindable": true
        }
    ]
});
