xds.component.Registry.addDefinition({
    "type": "Ext.pivot.Grid",
    "className": "Ext.pivot.Grid",
    "classAlias": "widget.pivotgrid",
    "inherits": "Ext.grid.Panel",
    "autoName": "MyGrid",
    "typeAlias": [
        "Mz.pivot.Grid",
        "Mz.pivot.Table"
    ],
    "cfgs": [
        {
            "name": "clsGrandTotal",
            "type": "string",
            "defaultValue": "x-pivot-grid-grand-total"
        },
        {
            "name": "clsGroupTotal",
            "type": "string",
            "defaultValue": "x-pivot-grid-group-total"
        },
        {
            "name": "columnLines",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "columns",
            "type": "array",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "enableColumnSort",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableLoadMask",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "enableLocking",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "matrix",
            "type": "object",
            "defaultValue": {
                "type": "local"
            },
            "bindable": true
        },
        {
            "name": "startColGroupsCollapsed",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "startRowGroupsCollapsed",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stateEvents",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "pivotgroupexpand",
                "pivotgroupcollapse",
                "pivotdone"
            ]
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "subGridXType",
            "type": "string",
            "defaultValue": "gridpanel"
        }
    ],
    "eventDefs": [
        {
            "name": "pivotbeforereconfigure",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "pivotbeforerequest",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "params",
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
            "name": "pivotbuildtotals",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "totals",
                    "type": "Array",
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
            "name": "pivotcolumnsbuilt",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "columns",
                    "type": "Array",
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
            "name": "pivotdone",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
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
            "name": "pivotgroupcellclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupcellcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupcelldblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupcollapse",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "type",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "Ext.pivot.axis.Item",
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
            "name": "pivotgroupcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupdblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotgroupexpand",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "type",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "group",
                    "type": "Ext.pivot.axis.Item",
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
            "name": "pivotitemcellclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotitemcellcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotitemcelldblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotitemclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotitemcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotitemdblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivotmodelbuilt",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "model",
                    "type": "Ext.data.Model",
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
            "name": "pivotprogress",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "index",
                    "type": "Integer",
                    "optional": true
                },
                {
                    "name": "total",
                    "type": "Integer",
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
            "name": "pivotreconfigure",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "config",
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
            "name": "pivotrecordbuilt",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model",
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
            "name": "pivotrequestexception",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
                {
                    "name": "response",
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
            "name": "pivotstart",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
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
            "name": "pivotstorebuilt",
            "params": [
                {
                    "name": "matrix",
                    "type": "Ext.pivot.matrix.Base",
                    "optional": true
                },
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
            "name": "pivottotalcellclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivottotalcellcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivottotalcelldblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivottotalclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivottotalcontextmenu",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
            "name": "pivottotaldblclick",
            "params": [
                {
                    "name": "params",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
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
