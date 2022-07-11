xds.component.Registry.addDefinition({
    "type": "Ext.route.Route",
    "className": "Ext.route.Route",
    "inherits": "Ext.Base",
    "autoName": "MyRoute",
    "cfgs": [
        {
            "name": "allowInactive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "caseInsensitive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "conditions",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "handlers",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "name",
            "type": "string",
            "bindable": true
        },
        {
            "name": "url",
            "type": "string",
            "bindable": true
        }
    ]
});
