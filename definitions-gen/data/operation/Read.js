xds.component.Registry.addDefinition({
    "type": "Ext.data.operation.Read",
    "className": "Ext.data.operation.Read",
    "classAlias": "data.operation.read",
    "inherits": "Ext.data.operation.Operation",
    "autoName": "MyRead",
    "cfgs": [
        {
            "name": "filters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "grouper",
            "type": "object",
            "bindable": true
        },
        {
            "name": "limit",
            "type": "number",
            "bindable": true
        },
        {
            "name": "page",
            "type": "number",
            "bindable": true
        },
        {
            "name": "sorters",
            "type": "array",
            "bindable": true
        },
        {
            "name": "start",
            "type": "number",
            "bindable": true
        }
    ]
});
