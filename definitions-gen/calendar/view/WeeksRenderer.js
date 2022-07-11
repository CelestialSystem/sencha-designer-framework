xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.WeeksRenderer",
    "className": "Ext.calendar.view.WeeksRenderer",
    "inherits": "Ext.Base",
    "autoName": "MyWeeksRenderer",
    "cfgs": [
        {
            "name": "days",
            "type": "number"
        },
        {
            "name": "index",
            "type": "number"
        },
        {
            "name": "maxEvents",
            "type": "number"
        },
        {
            "name": "overflow",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "start",
            "type": "date"
        }
    ]
});
