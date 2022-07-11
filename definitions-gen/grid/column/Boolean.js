xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Boolean",
    "className": "Ext.grid.column.Boolean",
    "classAlias": "widget.booleancolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyBoolean",
    "typeAlias": [
        "Ext.grid.BooleanColumn"
    ],
    "cfgs": [
        {
            "name": "falseText",
            "type": "string",
            "defaultValue": false
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
        },
        {
            "name": "trueText",
            "type": "string",
            "defaultValue": true
        },
        {
            "name": "undefinedText",
            "type": "string",
            "defaultValue": "\\xa0"
        }
    ]
});
