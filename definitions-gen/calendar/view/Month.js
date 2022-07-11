xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Month",
    "className": "Ext.calendar.view.Month",
    "classAlias": "widget.calendar-monthview",
    "inherits": "Ext.calendar.view.Weeks",
    "autoName": "MyMonth",
    "cfgs": [
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:05:45.505Z",
            "bindable": true
        },
        {
            "name": "visibleWeeks",
            "type": "number",
            "defaultValue": 6,
            "bindable": true
        }
    ]
});
