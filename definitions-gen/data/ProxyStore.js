xds.component.Registry.addDefinition({
    "type": "Ext.data.ProxyStore",
    "className": "Ext.data.ProxyStore",
    "inherits": "Ext.data.AbstractStore",
    "autoName": "MyProxyStore",
    "cfgs": [
        {
            "name": "asynchronousLoad",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "autoLoad",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "autoSync",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "batchUpdateMode",
            "type": "string",
            "defaultValue": "operation",
            "bindable": true
        },
        {
            "name": "fields",
            "type": "array",
            "bindable": true,
            "alternates": [
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "model",
            "type": "string",
            "bindable": true
        },
        {
            "name": "proxy",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "sortOnLoad",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "trackRemoved",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeload",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
        },
        {
            "name": "beforesync",
            "params": [
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
            "name": "load",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "records",
                    "type": "Ext.data.Model[]",
                    "optional": true
                },
                {
                    "name": "successful",
                    "type": "Boolean",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "Ext.data.operation.Read",
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
            "name": "metachange",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "meta",
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
            "name": "write",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
