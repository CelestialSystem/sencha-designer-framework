xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Week",
    "className": "Ext.calendar.panel.Week",
    "classAlias": "widget.calendar-week",
    "inherits": "Ext.calendar.panel.Days",
    "autoName": "MyWeek",
    "cfgs": [
        {
            "name": "firstDayOfWeek",
            "type": "number",
            "defaultValue": true
        },
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:05:45.502Z",
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "defaultValue": {
                "firstDayOfWeek": true
            },
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": 7
        }
    ]
});
