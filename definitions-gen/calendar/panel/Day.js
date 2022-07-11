xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Day",
    "className": "Ext.calendar.panel.Day",
    "classAlias": "widget.calendar-day",
    "inherits": "Ext.calendar.panel.Days",
    "autoName": "MyDay",
    "cfgs": [
        {
            "name": "view",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-dayview"
            },
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": 4
        }
    ]
});
