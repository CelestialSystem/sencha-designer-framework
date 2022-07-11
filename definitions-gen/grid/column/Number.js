xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Number",
    "className": "Ext.grid.column.Number",
    "classAlias": "widget.numbercolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyNumber",
    "typeAlias": [
        "Ext.grid.NumberColumn"
    ],
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "defaultValue": "0,000.00"
        },
        {
            "name": "producesHTML",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "renderer",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        },
        {
            "name": "scope",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        }
    ]
});
