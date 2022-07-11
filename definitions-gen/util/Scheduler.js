xds.component.Registry.addDefinition({
    "type": "Ext.util.Scheduler",
    "className": "Ext.util.Scheduler",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyScheduler",
    "cfgs": [
        {
            "name": "preSort",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "function"
                }
            ]
        },
        {
            "name": "tickDelay",
            "type": "number",
            "defaultValue": 5,
            "bindable": true
        }
    ]
});
