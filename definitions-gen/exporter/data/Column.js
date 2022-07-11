xds.component.Registry.addDefinition({
    "type": "Ext.exporter.data.Column",
    "className": "Ext.exporter.data.Column",
    "inherits": "Ext.exporter.data.Base",
    "autoName": "MyColumn",
    "cfgs": [
        {
            "name": "columns",
            "type": "array",
            "bindable": true
        },
        {
            "name": "index",
            "type": "number",
            "bindable": true
        },
        {
            "name": "level",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "mergeAcross",
            "type": "number",
            "bindable": true
        },
        {
            "name": "mergeDown",
            "type": "number",
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        },
        {
            "name": "text",
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
