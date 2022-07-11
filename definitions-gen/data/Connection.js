xds.component.Registry.addDefinition({
    "type": "Ext.data.Connection",
    "className": "Ext.data.Connection",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyConnection",
    "cfgs": [
        {
            "name": "async",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "autoAbort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "binary",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "cors",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "defaultHeaders",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultPostHeader",
            "type": "string",
            "defaultValue": "application/x-www-form-urlencoded; charset=UTF-8",
            "bindable": true
        },
        {
            "name": "defaultXhrHeader",
            "type": "string",
            "defaultValue": "XMLHttpRequest",
            "bindable": true
        },
        {
            "name": "disableCaching",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "disableCachingParam",
            "type": "string",
            "defaultValue": "_dc",
            "bindable": true
        },
        {
            "name": "extraParams",
            "type": "object",
            "bindable": true
        },
        {
            "name": "method",
            "type": "string",
            "bindable": true
        },
        {
            "name": "password",
            "type": "string",
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
    ],
    "eventDefs": [
        {
            "name": "beforerequest",
            "params": [
                {
                    "name": "conn",
                    "type": "Ext.data.Connection",
                    "optional": true
                },
                {
                    "name": "options",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "requestcomplete",
            "params": [
                {
                    "name": "conn",
                    "type": "Ext.data.Connection",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "options",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "requestexception",
            "params": [
                {
                    "name": "conn",
                    "type": "Ext.data.Connection",
                    "optional": true
                },
                {
                    "name": "response",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "options",
                    "type": "Object",
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
