xds.component.Registry.addDefinition({
    "type": "Ext.data.Query",
    "className": "Ext.data.Query",
    "classAlias": "query.default",
    "inherits": "Ext.util.BasicFilter",
    "mixin": [
        "Ext.mixin.Factoryable",
        "Ext.data.query.Compiler",
        "Ext.data.query.Converter",
        "Ext.data.query.Stringifier"
    ],
    "autoName": "MyQuery",
    "cfgs": [
        {
            "name": "format",
            "type": "string",
            "editor": "options",
            "options": [
                "ast",
                "filters",
                "query"
            ],
            "defaultValue": "ast",
            "bindable": true
        },
        {
            "name": "functions",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "source",
            "type": "string",
            "bindable": true
        }
    ]
});
