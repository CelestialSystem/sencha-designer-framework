xds.component.Registry.addDefinition({
    "type": "Ext.route.Action",
    "className": "Ext.route.Action",
    "inherits": "Ext.Base",
    "autoName": "MyAction",
    "cfgs": [
        {
            "name": "actions",
            "type": "array",
            "bindable": true
        },
        {
            "name": "befores",
            "type": "array",
            "bindable": true
        },
        {
            "name": "urlParams",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        }
    ]
});
