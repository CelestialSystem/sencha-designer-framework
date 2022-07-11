xds.component.Registry.addDefinition({
    "type": "Ext.calendar.Event",
    "className": "Ext.calendar.Event",
    "classAlias": "widget.calendar-event",
    "inherits": "Ext.calendar.EventBase",
    "autoName": "MyEvent",
    "cfgs": [
        {
            "name": "timeFormat",
            "type": "string",
            "defaultValue": "H:i",
            "bindable": true
        }
    ]
});
