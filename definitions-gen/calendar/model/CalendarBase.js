xds.component.Registry.addDefinition({
    "type": "Ext.calendar.model.CalendarBase",
    "className": "Ext.calendar.model.CalendarBase",
    "inherits": "Ext.Mixin",
    "autoName": "MyCalendarBase",
    "cfgs": [
        {
            "name": "eventStoreDefaults",
            "type": "object",
            "defaultValue": {
                "type": "calendar-events",
                "proxy": {
                    "type": "ajax"
                }
            },
            "bindable": true
        }
    ]
});
