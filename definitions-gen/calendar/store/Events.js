xds.component.Registry.addDefinition({
    "type": "Ext.calendar.store.Events",
    "className": "Ext.calendar.store.Events",
    "classAlias": "store.calendar-events",
    "inherits": "Ext.data.Store",
    "autoName": "MyEvents",
    "cfgs": [
        {
            "name": "calendar",
            "type": "object",
            "bindable": true
        },
        {
            "name": "calendarParam",
            "type": "string",
            "defaultValue": "calendar",
            "bindable": true
        },
        {
            "name": "dateFormat",
            "type": "string",
            "defaultValue": "C",
            "bindable": true
        },
        {
            "name": "endParam",
            "type": "string",
            "defaultValue": "endDate",
            "bindable": true
        },
        {
            "name": "prefetchMode",
            "type": "string",
            "defaultValue": "month",
            "bindable": true
        },
        {
            "name": "startParam",
            "type": "string",
            "defaultValue": "startDate",
            "bindable": true
        }
    ]
});
