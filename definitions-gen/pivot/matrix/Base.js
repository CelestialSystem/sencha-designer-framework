xds.component.Registry.addDefinition({
    "type": "Ext.pivot.matrix.Base",
    "className": "Ext.pivot.matrix.Base",
    "classAlias": "pivotmatrix.base",
    "inherits": "Ext.util.Observable",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "typeAlias": [
        "Mz.aggregate.matrix.Abstract"
    ],
    "cfgs": [
        {
            "name": "aggregate",
            "type": "object"
        },
        {
            "name": "calculateAsExcel",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "cmp",
            "type": "object"
        },
        {
            "name": "colGrandTotalsPosition",
            "type": "string",
            "defaultValue": "last"
        },
        {
            "name": "collapsibleColumns",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "collapsibleRows",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "colSubTotalsPosition",
            "type": "string",
            "defaultValue": "last"
        },
        {
            "name": "compactViewColumnWidth",
            "type": "number",
            "defaultValue": 200
        },
        {
            "name": "compactViewKey",
            "type": "string",
            "defaultValue": "_compactview_"
        },
        {
            "name": "grandTotalKey",
            "type": "string",
            "defaultValue": "grandtotal"
        },
        {
            "name": "keysSeparator",
            "type": "string",
            "defaultValue": "#_#"
        },
        {
            "name": "leftAxis",
            "type": "object"
        },
        {
            "name": "leftAxisType",
            "type": "string",
            "defaultValue": "base"
        },
        {
            "name": "resultType",
            "type": "string",
            "defaultValue": "base"
        },
        {
            "name": "rowGrandTotalsPosition",
            "type": "string",
            "defaultValue": "last"
        },
        {
            "name": "rowSubTotalsPosition",
            "type": "string",
            "defaultValue": "first"
        },
        {
            "name": "showZeroAsBlank",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "textGrandTotalTpl",
            "type": "string",
            "defaultValue": "Grand total"
        },
        {
            "name": "textRowLabels",
            "type": "string",
            "defaultValue": "Row labels"
        },
        {
            "name": "textTotalTpl",
            "type": "string",
            "defaultValue": "Total ({name})"
        },
        {
            "name": "topAxis",
            "type": "object"
        },
        {
            "name": "topAxisType",
            "type": "string",
            "defaultValue": "base"
        },
        {
            "name": "type",
            "type": "string",
            "defaultValue": "abstract"
        },
        {
            "name": "useNaturalSorting",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "viewLayoutType",
            "type": "string",
            "defaultValue": "outline"
        }
    ],
    "eventDefs": [
        {
            "name": "beforereconfigure",
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
            "name": "buildtotals",
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
            "name": "cleardata",
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
            "name": "columnsbuilt",
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
            "name": "done",
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
            "name": "modelbuilt",
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
            "name": "progress",
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
            "name": "reconfigure",
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
            "name": "recordbuilt",
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
                    "name": "item",
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
            "name": "start",
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
            "name": "storebuilt",
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
        }
    ]
});
