xds.component.Registry.addDefinition({
    "type": "Ext.ux.event.Driver",
    "className": "Ext.ux.event.Driver",
    "inherits": "Ext.util.Observable",
    "autoName": "MyDriver",
    "eventDefs": [
        {
            "name": "start",
            "params": [
                {
                    "name": "driver",
                    "type": "Ext.ux.event.Driver",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "stop",
            "params": [
                {
                    "name": "driver",
                    "type": "Ext.ux.event.Driver",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
