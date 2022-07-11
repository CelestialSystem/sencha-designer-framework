xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.html.Doc",
    "className": "Ext.exporter.file.html.Doc",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyDoc",
    "cfgs": [
        {
            "name": "author",
            "type": "string",
            "defaultValue": "Sencha",
            "bindable": true
        },
        {
            "name": "charset",
            "type": "string",
            "defaultValue": "UTF-8",
            "bindable": true
        },
        {
            "name": "styles",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "table",
            "type": "object",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "defaultValue": "Title",
            "bindable": true
        }
    ]
});
