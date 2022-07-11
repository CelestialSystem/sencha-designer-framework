xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Action",
    "className": "Ext.grid.column.Action",
    "classAlias": "widget.actioncolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyAction",
    "typeAlias": [
        "Ext.grid.ActionColumn"
    ],
    "cfgs": [
        {
            "name": "altText",
            "type": "string"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "getClass",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metadata",
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
                }
            ]
        },
        {
            "name": "getTip",
            "type": "function",
            "params": [
                {
                    "name": "value",
                    "type": "Object"
                },
                {
                    "name": "metadata",
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
                }
            ]
        },
        {
            "name": "glyph",
            "type": "auto"
        },
        {
            "name": "handler",
            "type": "function",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table"
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
                    "name": "item",
                    "type": "Object"
                },
                {
                    "name": "e",
                    "type": "Event"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                },
                {
                    "name": "row",
                    "type": "HTMLElement"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "icon",
            "type": "string",
            "defaultValue": "Ext#BLANK_IMAGE_URL"
        },
        {
            "name": "iconCls",
            "type": "string"
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "isActionDisabled",
            "type": "function",
            "params": [
                {
                    "name": "view",
                    "type": "Ext.view.Table"
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
                    "name": "item",
                    "type": "Object"
                },
                {
                    "name": "record",
                    "type": "Ext.data.Model"
                }
            ]
        },
        {
            "name": "itemAriaRole",
            "type": "string",
            "defaultValue": "button"
        },
        {
            "name": "items",
            "type": "array"
        },
        {
            "name": "itemTabIndex",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "menuText",
            "type": "string",
            "defaultValue": "<i>Actions</i>"
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "stopSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "tooltip",
            "type": "string"
        }
    ]
});
