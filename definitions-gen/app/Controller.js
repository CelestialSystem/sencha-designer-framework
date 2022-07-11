xds.component.Registry.addDefinition({
    "type": "Ext.app.Controller",
    "className": "Ext.app.Controller",
    "inherits": "Ext.app.BaseController",
    "autoName": "MyController",
    "cfgs": [
        {
            "name": "application",
            "type": "object",
            "bindable": true
        },
        {
            "name": "models",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "refs",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "stores",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "views",
            "type": "typedarray",
            "collapseSingleValue": true
        }
    ]
});
