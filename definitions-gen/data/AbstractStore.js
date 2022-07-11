xds.component.Registry.addDefinition({
    "type": "Ext.data.AbstractStore",
    "className": "Ext.data.AbstractStore",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable",
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyAbstractStore",
    "cfgs": [
        {
            "name": "autoDestroy",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "filters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "groupDir",
            "type": "string",
            "defaultValue": "ASC",
            "bindable": true
        },
        {
            "name": "grouper",
            "type": "object",
            "bindable": true
        },
        {
            "name": "groupField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 25,
            "bindable": true
        },
        {
            "name": "reloadOnClearSorters",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "remoteFilter",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "remoteSort",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "sorters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "statefulFilters",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "storeId",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "add",
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
                    "name": "index",
                    "type": "Number",
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
            "name": "beforesort",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "sorters",
                    "type": "Ext.util.Sorter[]",
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
            "name": "beginupdate",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "clear",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
            "name": "datachanged",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
            "name": "endupdate",
            "params": [
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "refresh",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
            "name": "remove",
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
                    "name": "index",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "isMove",
                    "type": "Boolean",
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
            "name": "sort",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
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
            "name": "update",
            "params": [
                {
                    "name": "store",
                    "type": "Ext.data.Store",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
                    "optional": true
                },
                {
                    "name": "operation",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "modifiedFieldNames",
                    "type": "String[]",
                    "optional": true
                },
                {
                    "name": "details",
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
