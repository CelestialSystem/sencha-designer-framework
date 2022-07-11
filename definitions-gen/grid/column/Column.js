xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Column",
    "className": "Ext.grid.column.Column",
    "classAlias": "widget.gridcolumn",
    "inherits": "Ext.grid.HeaderContainer",
    "mixin": [
        "Ext.mixin.StyleCacher",
        "Ext.mixin.Toolable"
    ],
    "autoName": "MyColumn",
    "typeAlias": [
        "Ext.grid.column.Template"
    ],
    "cfgs": [
        {
            "name": "align",
            "type": "string",
            "defaultValue": "left",
            "bindable": true
        },
        {
            "name": "cell",
            "type": "object",
            "defaultValue": {
                "xtype": "gridcell"
            },
            "bindable": true
        },
        {
            "name": "computedWidth",
            "type": "number",
            "bindable": true
        },
        {
            "name": "dataIndex",
            "type": "string",
            "bindable": true
        },
        {
            "name": "defaultEditor",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "defaultWidth",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "depends",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        },
        {
            "name": "editable",
            "type": "boolean",
            "bindable": true
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
            "name": "exportRenderer",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
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
            "type": "object",
            "bindable": true
        },
        {
            "name": "exportSummaryRenderer",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
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
            "name": "filter",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "formatter",
            "type": "string",
            "bindable": true
        },
        {
            "name": "groupable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "grouper",
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
            "name": "groupHeaderTpl",
            "type": "template",
            "bindable": true
        },
        {
            "name": "hideable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "ignore",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "locked",
            "type": "boolean",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "menu",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "menuDisabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "dataIndex",
                    "type": "Number"
                },
                {
                    "name": "cell",
                    "type": "Ext.grid.cell.Base"
                },
                {
                    "name": "column",
                    "type": "Ext.grid.column.Column"
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
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "sorter",
            "type": "function",
            "defaultValue": true,
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
            "name": "summary",
            "type": "string",
            "bindable": true,
            "editor": "options",
            "options": ["average","sum","count","min","max"]
        },
        {
            "name": "summaryCell",
            "type": "object",
            "bindable": true
        },
        {
            "name": "summaryDataIndex",
            "type": "string",
            "bindable": true
        },
        {
            "name": "summaryFormatter",
            "type": "string",
            "bindable": true
        },
        {
            "name": "summaryRenderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "value",
                    "type": "Mixed"
                },
                {
                    "name": "context",
                    "type": "Object"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "text",
            "type": "string",
            "defaultValue": "\\xa0",
            "bindable": true
        },
        {
            "name": "tpl",
            "type": "template",
            "bindable": true
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
