xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Date",
    "className": "Ext.grid.column.Date",
    "classAlias": "widget.datecolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyDate",
    "typeAlias": [
        "Ext.grid.DateColumn"
    ],
    "cfgs": [
        {
            "name": "format",
            "type": "string"
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
