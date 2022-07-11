xds.component.Registry.addDefinition({
    "type": "Ext.calendar.store.Calendars",
    "className": "Ext.calendar.store.Calendars",
    "classAlias": "store.calendar-calendars",
    "inherits": "Ext.data.Store",
    "autoName": "MyCalendars",
    "cfgs": [
        {
            "name": "eventStoreDefaults",
            "type": "object",
            "bindable": true
        }
    ]
});
