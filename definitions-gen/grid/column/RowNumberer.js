xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.RowNumberer",
    "className": "Ext.grid.column.RowNumberer",
    "classAlias": "widget.rownumberer",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyRowNumberer",
    "typeAlias": [
        "Ext.grid.RowNumberer"
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
            "defaultValue": "right",
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-row-numberer"
        },
        {
            "name": "dataIndex",
            "type": "string"
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "hideable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "ignoreExport",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "menuDisabled",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "producesHTML",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "resizable",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "sortable",
            "type": "boolean",
            "defaultValue": false,
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "tdCls",
            "type": "string",
            "defaultValue": "x-grid-cell-row-numberer x-grid-cell-special"
        },
        {
            "name": "text",
            "type": "string",
            "defaultValue": "&#160;",
            "bindable": true
        },
        {
            "name": "width",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        }
    ]
});
