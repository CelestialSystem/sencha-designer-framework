xds.component.Registry.addDefinition({
    "type": "Ext.data.operation.Operation",
    "className": "Ext.data.operation.Operation",
    "inherits": "Ext.Base",
    "autoName": "MyOperation",
    "typeAlias": [
        "Ext.data.Operation"
    ],
    "cfgs": [
        {
            "name": "batch",
            "type": "object",
            "bindable": true
        },
        {
            "name": "callback",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "records",
                    "type": "Ext.data.Model[]"
                },
                {
                    "name": "operation",
                    "type": "Ext.data.operation.Operation"
                },
                {
                    "name": "success",
                    "type": "Boolean"
                }
            ]
        },
        {
            "name": "id",
            "type": "object",
            "bindable": true
        },
        {
            "name": "params",
            "type": "object",
            "bindable": true
        },
        {
            "name": "proxy",
            "type": "object",
            "bindable": true
        },
        {
            "name": "records",
            "type": "array",
            "bindable": true
        },
        {
            "name": "request",
            "type": "object",
            "bindable": true
        },
        {
            "name": "resultSet",
            "type": "object",
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "synchronous",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        }
    ]
});
