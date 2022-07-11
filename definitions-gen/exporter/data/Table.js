xds.component.Registry.addDefinition({
    "type": "Ext.exporter.data.Table",
    "className": "Ext.exporter.data.Table",
    "inherits": "Ext.exporter.data.Group",
    "autoName": "MyTable",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
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
        }
    ]
});
