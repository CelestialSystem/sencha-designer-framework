xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.DaysRenderer",
    "className": "Ext.calendar.view.DaysRenderer",
    "inherits": "Ext.Base",
    "autoName": "MyDaysRenderer",
    "cfgs": [
        {
            "name": "end",
            "type": "date"
        },
        {
            "name": "start",
            "type": "date"
        },
        {
            "name": "view",
            "type": "object"
        }
    ]
});
