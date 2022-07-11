xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Ajax",
    "className": "Ext.data.proxy.Ajax",
    "classAlias": "proxy.ajax",
    "inherits": "Ext.data.proxy.Server",
    "autoName": "MyAjax",
    "typeAlias": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
    ],
    "cfgs": [
        {
            "name": "actionMethods",
            "type": "object",
            "defaultValue": {
                "create": "POST",
                "read": "GET",
                "update": "POST",
                "destroy": "POST"
            },
            "bindable": true
        },
        {
            "name": "binary",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "headers",
            "type": "object",
            "bindable": true
        },
        {
            "name": "paramsAsJson",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "password",
            "type": "string",
            "bindable": true
        },
        {
            "name": "useDefaultXhrHeader",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "username",
            "type": "string",
            "bindable": true
        },
        {
            "name": "withCredentials",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
