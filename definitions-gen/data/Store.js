xds.component.Registry.addDefinition({
    "type": "Ext.data.Store",
    "className": "Ext.data.Store",
    "classAlias": "store.store",
    "inherits": "Ext.data.ProxyStore",
    "mixin": [
        "Ext.data.LocalStore"
    ],
    "autoName": "MyStore",
    "cfgs": [
        {
            "name": "clearOnPageLoad",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "clearRemovedOnLoad",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "data",
            "type": "array",
            "bindable": true
        },
        {
            "name": "session",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeprefetch",
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
            "name": "filterchange",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "filters",
                    "type": "Ext.util.Filter[]",
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
            "name": "groupchange",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "grouper",
                    "type": "Ext.util.Grouper",
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
            "name": "prefetch",
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
