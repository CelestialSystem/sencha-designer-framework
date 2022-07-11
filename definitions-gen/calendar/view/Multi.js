xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Multi",
    "className": "Ext.calendar.view.Multi",
    "classAlias": "widget.calendar-multiview",
    "inherits": "Ext.container.Container",
    "autoName": "MyMulti",
    "cfgs": [
        {
            "name": "compact",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "compactOptions",
            "type": "object",
            "bindable": true
        },
        {
            "name": "defaultView",
            "type": "string"
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "fit",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "timezoneOffset",
            "type": "number",
            "bindable": true
        },
        {
            "name": "value",
            "type": "date",
            "bindable": true
        },
        {
            "name": "views",
            "type": "object",
            "bindable": true
        }
    ]
});
