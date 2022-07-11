xds.component.Registry.addDefinition({
    "type": "Ext.exporter.data.Group",
    "className": "Ext.exporter.data.Group",
    "inherits": "Ext.exporter.data.Base",
    "autoName": "MyGroup",
    "cfgs": [
        {
            "name": "groups",
            "type": "array",
            "bindable": true
        },
        {
            "name": "rows",
            "type": "array",
            "bindable": true
        },
        {
            "name": "summaries",
            "type": "array",
            "bindable": true
        },
        {
            "name": "text",
            "type": "string",
            "bindable": true
        }
    ]
});
