xds.component.Registry.addDefinition({
    "type": "Ext.pivot.Grid",
    "className": "Ext.pivot.Grid",
    "classAlias": "widget.pivotgrid",
    "inherits": "Ext.grid.Grid",
    "autoName": "MyGrid",
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
            "name": "leftAxisCellConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "pivotgridgroupcell"
            },
            "bindable": true
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
            "name": "record",
            "type": "object",
            "bindable": true,
            "hidden": true,
            "canSetValue": false
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
            "name": "topAxisCellConfig",
            "type": "object",
            "defaultValue": {
                "xtype": "pivotgridcell"
            },
            "bindable": true
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
            "name": "pivotgroupcelldoubletap",
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
            "name": "pivotgroupcelltap",
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
            "name": "pivotgroupcelltaphold",
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
            "name": "pivotgroupdoubletap",
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
            "name": "pivotgrouptap",
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
            "name": "pivotgrouptaphold",
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
            "name": "pivotitemcelldoubletap",
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
            "name": "pivotitemcelltap",
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
            "name": "pivotitemcelltaphold",
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
            "name": "pivotitemdoubletap",
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
            "name": "pivotitemtap",
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
            "name": "pivotitemtaphold",
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
            "name": "pivottotalcelldoubletap",
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
            "name": "pivottotalcelltap",
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
            "name": "pivottotalcelltaphold",
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
            "name": "pivottotaldoubletap",
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
            "name": "pivottotaltap",
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
            "name": "pivottotaltaphold",
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
