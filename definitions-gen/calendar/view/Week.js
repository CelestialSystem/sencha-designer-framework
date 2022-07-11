xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Week",
    "className": "Ext.calendar.view.Week",
    "classAlias": "widget.calendar-weekview",
    "inherits": "Ext.calendar.view.Days",
    "autoName": "MyWeek",
    "cfgs": [
        {
            "name": "firstDayOfWeek",
            "type": "number",
            "bindable": true
        },
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:05:45.506Z",
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": 7,
            "bindable": true
        }
    ]
});
