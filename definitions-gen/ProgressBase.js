xds.component.Registry.addDefinition({
    "type": "Ext.ProgressBase",
    "className": "Ext.ProgressBase",
    "inherits": "Ext.Base",
    "autoName": "MyProgressBase",
    "cfgs": [
        {
            "name": "textTpl",
            "type": "template",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "value",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
