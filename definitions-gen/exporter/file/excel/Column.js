xds.component.Registry.addDefinition({
    "type": "Ext.exporter.file.excel.Column",
    "className": "Ext.exporter.file.excel.Column",
    "inherits": "Ext.exporter.file.Base",
    "autoName": "MyColumn",
    "cfgs": [
        {
            "name": "autoFitWidth",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "caption",
            "type": "string",
            "bindable": true
        },
        {
            "name": "hidden",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "index",
            "type": "number",
            "bindable": true
        },
        {
            "name": "span",
            "type": "number",
            "bindable": true
        },
        {
            "name": "styleId",
            "type": "string",
            "bindable": true
        },
        {
            "name": "width",
            "type": "number",
            "bindable": true
        }
    ]
});
