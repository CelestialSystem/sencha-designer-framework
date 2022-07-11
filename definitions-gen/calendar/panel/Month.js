xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Month",
    "className": "Ext.calendar.panel.Month",
    "classAlias": "widget.calendar-month",
    "inherits": "Ext.calendar.panel.Weeks",
    "autoName": "MyMonth",
    "cfgs": [
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:04:35.536Z",
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-monthview"
            },
            "bindable": true
        },
        {
            "name": "visibleWeeks",
            "type": "number",
            "defaultValue": 6
        }
    ]
});
