xds.component.Registry.addDefinition({
    "type": "Ext.grid.column.Template",
    "className": "Ext.grid.column.Template",
    "classAlias": "widget.templatecolumn",
    "inherits": "Ext.grid.column.Column",
    "autoName": "MyTemplate",
    "typeAlias": [
        "Ext.grid.TemplateColumn"
    ],
    "cfgs": [
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
            "name": "tpl",
            "type": "template",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
