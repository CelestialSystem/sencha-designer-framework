xds.component.Registry.addDefinition({
    "type": "Ext.calendar.store.EventSource",
    "className": "Ext.calendar.store.EventSource",
    "inherits": "Ext.data.Store",
    "autoName": "MyEventSource",
    "cfgs": [
        {
            "name": "source",
            "type": "object",
            "bindable": true
        }
    ]
});
