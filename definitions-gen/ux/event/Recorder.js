xds.component.Registry.addDefinition({
    "type": "Ext.ux.event.Recorder",
    "className": "Ext.ux.event.Recorder",
    "inherits": "Ext.ux.event.Driver",
    "autoName": "MyRecorder",
    "eventDefs": [
        {
            "name": "add",
            "params": [
                {
                    "name": "recorder",
                    "type": "Ext.ux.event.Recorder",
                    "optional": true
                },
                {
                    "name": "eventDescriptor",
                    "type": "Object",
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
            "name": "coalesce",
            "params": [
                {
                    "name": "recorder",
                    "type": "Ext.ux.event.Recorder",
                    "optional": true
                },
                {
                    "name": "eventDescriptor",
                    "type": "Object",
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
