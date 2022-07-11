xds.component.Registry.addDefinition({
    "type": "Ext.exporter.data.Cell",
    "className": "Ext.exporter.data.Cell",
    "inherits": "Ext.exporter.data.Base",
    "autoName": "MyCell",
    "cfgs": [
        {
            "name": "style",
            "type": "object",
            "bindable": true
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "date"
                }
            ]
        }
    ]
});
