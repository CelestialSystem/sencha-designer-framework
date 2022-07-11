xds.component.Registry.addDefinition({
    "type": "Ext.grid.locking.Lockable",
    "className": "Ext.grid.locking.Lockable",
    "inherits": "Ext.Base",
    "autoName": "MyLockable",
    "typeAlias": [
        "Ext.grid.Lockable"
    ],
    "cfgs": [
        {
            "name": "layout",
            "type": "object"
        },
        {
            "name": "lockedGridConfig",
            "type": "object"
        },
        {
            "name": "lockedViewConfig",
            "type": "object"
        },
        {
            "name": "lockText",
            "type": "string",
            "defaultValue": "Lock"
        },
        {
            "name": "normalGridConfig",
            "type": "object"
        },
        {
            "name": "normalViewConfig",
            "type": "object"
        },
        {
            "name": "split",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "subGridXType",
            "type": "string"
        },
        {
            "name": "syncRowHeight",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "unlockText",
            "type": "string",
            "defaultValue": "Unlock"
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
            "name": "lockcolumn",
            "params": [
                {
                    "name": "gridpanel",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "processcolumns",
            "params": [
                {
                    "name": "lockedColumns",
                    "type": "Ext.grid.column.Column[]",
                    "optional": true
                },
                {
                    "name": "normalColumns",
                    "type": "Ext.grid.column.Column[]",
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
            "name": "unlockcolumn",
            "params": [
                {
                    "name": "gridpanel",
                    "type": "Ext.grid.Panel",
                    "optional": true
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column",
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
            "name": "viewready",
            "params": [
                {
                    "name": "tablepanel",
                    "type": "Ext.panel.Table",
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
