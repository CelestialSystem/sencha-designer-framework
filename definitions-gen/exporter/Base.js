xds.component.Registry.addDefinition({
    "type": "Ext.exporter.Base",
    "className": "Ext.exporter.Base",
    "classAlias": "exporter.base",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Factoryable"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "author",
            "type": "string",
            "defaultValue": "Sencha",
            "bindable": true
        },
        {
            "name": "binary",
            "type": "string",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "charset",
            "type": "string",
            "defaultValue": "UTF-8",
            "bindable": true
        },
        {
            "name": "data",
            "type": "object",
            "bindable": true
        },
        {
            "name": "fileName",
            "type": "string",
            "defaultValue": "export.txt",
            "bindable": true
        },
        {
            "name": "mimeType",
            "type": "string",
            "defaultValue": "text/plain",
            "bindable": true
        },
        {
            "name": "showSummary",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        }
    ]
});
