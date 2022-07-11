xds.component.Registry.addDefinition({
    "type": "Ext.calendar.header.Days",
    "className": "Ext.calendar.header.Days",
    "classAlias": "widget.calendar-daysheader",
    "inherits": "Ext.calendar.header.Base",
    "autoName": "MyDays",
    "cfgs": [
        {
            "name": "compactOptions",
            "type": "object",
            "defaultValue": {
                "format": "d"
            },
            "bindable": true
        },
        {
            "name": "format",
            "type": "string",
            "defaultValue": "D m/d",
            "bindable": true
        }
    ]
});
