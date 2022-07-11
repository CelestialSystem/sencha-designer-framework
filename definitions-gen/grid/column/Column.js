xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Column",
    "className": "Ext.grid.column.Column",
    "classAlias": "widget.gridcolumn",
    "inherits": "Ext.grid.header.Container",
    "autoName": "MyColumn",
    "typeAlias": [
        "Ext.grid.Column"
    ],
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "editor": "options",
            "options": [
                "center",
                "end",
                "start"
            ],
            "defaultValue": "start",
            "bindable": true
        },
        {
            "name": "cellFocusable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "cellWrap",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "columns",
            "type": "array"
        },
        {
            "name": "dataIndex",
            "type": "string"
        },
        {
            "name": "dirtyText",
            "type": "string",
            "defaultValue": "Cell value has been edited"
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "editor",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "editRenderer",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metaData",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "rowIndex",
                    "type": "Number"
                },
                {
                    "name": "colIndex",
                    "type": "Number"
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "emptyCellText",
            "type": "string"
        },
        {
            "name": "enableTextSelection",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "exportRenderer",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "function"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "exportStyle",
            "type": "object"
        },
        {
            "name": "exportSummaryRenderer",
            "type": "boolean",
            "defaultValue": false,
            "alternates": [
                {
                    "type": "function"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "formatter",
            "type": "string"
        },
        {
            "name": "groupable",
            "type": "boolean"
        },
        {
            "name": "hideable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "lockable",
            "type": "boolean"
        },
        {
            "name": "locked",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "menuDisabled",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "menuText",
            "type": "string"
        },
        {
            "name": "producesHTML",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "renderer",
            "type": "function",
            "defaultValue": false,
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metaData",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "rowIndex",
                    "type": "Number"
                },
                {
                    "name": "colIndex",
                    "type": "Number"
                },
                {
                    "name": "store",
                    "type": "Ext.data.Store"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "resizable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "sorter",
            "type": "function",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "stateId",
            "type": "string"
        },
        {
            "name": "summaryRenderer",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "tdCls",
            "type": "string"
        },
        {
            "name": "text",
            "type": "string",
            "defaultValue": "\\xa0",
            "bindable": true
        },
        {
            "name": "tooltip",
            "type": "string"
        },
        {
            "name": "tooltipType",
            "type": "string",
            "defaultValue": "qtip"
        },
        {
            "name": "updater",
            "type": "function",
            "params": [
                {
                    "name": "cell",
                    "type": "HTMLElement"
                },
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "view",
                    "type": "Ext.view.View"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "variableRowHeight",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "filterType",
            "bindable": true,
            "type": "string",
            "editor": "options",
            "options": [
                "string",
                "date",
                "number",
                "boolean",
                "none",
                "list",
            ]
        }
    ]
});
