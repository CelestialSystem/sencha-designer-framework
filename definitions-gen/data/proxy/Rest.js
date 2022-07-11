xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Rest",
    "className": "Ext.data.proxy.Rest",
    "classAlias": "proxy.rest",
    "inherits": "Ext.data.proxy.Ajax",
    "autoName": "MyRest",
    "typeAlias": [
        "Ext.data.RestProxy"
    ],
    "cfgs": [
        {
            "name": "actionMethods",
            "type": "object",
            "defaultValue": {
                "create": "POST",
                "read": "GET",
                "update": "PUT",
                "destroy": "DELETE"
            },
            "bindable": true
        },
        {
            "name": "appendId",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "batchActions",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "bindable": true
        }
    ]
});
