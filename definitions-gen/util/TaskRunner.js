xds.component.Registry.addDefinition({
    "type": "Ext.util.TaskRunner",
    "className": "Ext.util.TaskRunner",
    "inherits": "Ext.Base",
    "autoName": "MyTaskRunner",
    "cfgs": [
        {
            "name": "fireIdleEvent",
            "type": "boolean"
        },
        {
            "name": "interval",
            "type": "number",
            "defaultValue": 10
        }
    ]
});
