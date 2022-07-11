xds.component.Registry.addDefinition({
    "type": "Ext.util.BasicFilter",
    "className": "Ext.util.BasicFilter",
    "inherits": "Ext.Base",
    "autoName": "MyBasicFilter",
    "cfgs": [
        {
            "name": "disabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "id",
            "type": "string",
            "bindable": true
        },
        {
            "name": "serializer",
            "type": "function",
            "bindable": true
        }
    ]
});
