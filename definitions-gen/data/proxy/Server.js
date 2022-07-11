xds.component.Registry.addDefinition({
    "type": "Ext.data.proxy.Server",
    "className": "Ext.data.proxy.Server",
    "classAlias": "proxy.server",
    "inherits": "Ext.data.proxy.Proxy",
    "autoName": "MyServer",
    "typeAlias": [
        "Ext.data.ServerProxy"
    ],
    "cfgs": [
        {
            "name": "api",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "cacheString",
            "type": "string",
            "defaultValue": "_dc",
            "bindable": true
        },
        {
            "name": "directionParam",
            "type": "string",
            "defaultValue": "dir",
            "bindable": true
        },
        {
            "name": "extraParams",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "filterParam",
            "type": "string",
            "defaultValue": "filter",
            "bindable": true
        },
        {
            "name": "groupDirectionParam",
            "type": "string",
            "defaultValue": "groupDir",
            "bindable": true
        },
        {
            "name": "groupParam",
            "type": "string",
            "defaultValue": "group",
            "bindable": true
        },
        {
            "name": "idParam",
            "type": "string",
            "defaultValue": "id",
            "bindable": true
        },
        {
            "name": "limitParam",
            "type": "string",
            "defaultValue": "limit",
            "bindable": true
        },
        {
            "name": "noCache",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "pageParam",
            "type": "string",
            "defaultValue": "page",
            "bindable": true
        },
        {
            "name": "simpleGroupMode",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "simpleSortMode",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "sortParam",
            "type": "string",
            "defaultValue": "sort",
            "bindable": true
        },
        {
            "name": "startParam",
            "type": "string",
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": 30000,
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "exception",
            "params": [
                {
                    "name": "proxy",
                    "type": "Ext.data.proxy.Proxy",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Ext.data.Response",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.operation.Operation",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
