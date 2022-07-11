xds.component.Registry.addDefinition({
    "type": "Ext.calendar.dd.WeeksProxy",
    "className": "Ext.calendar.dd.WeeksProxy",
    "classAlias": "drag.proxy.calendar-weeks",
    "inherits": "Ext.drag.proxy.Placeholder",
    "autoName": "MyWeeksProxy",
    "cfgs": [
        {
            "name": "titleTpl",
            "type": "template",
            "defaultValue": "<tpl if=\"days &gt; 1\">({days} days) </tpl>{title}",
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                }
            ]
        }
    ]
});
