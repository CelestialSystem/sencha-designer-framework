xds.component.Registry.addDefinition({
    "type": "Ext.data.amf.Proxy",
    "className": "Ext.data.amf.Proxy",
    "classAlias": "proxy.amf",
    "inherits": "Ext.data.proxy.Ajax",
    "autoName": "MyProxy",
    "cfgs": [
        {
            "name": "binary",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "reader",
            "type": "object",
            "defaultValue": "amf",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
