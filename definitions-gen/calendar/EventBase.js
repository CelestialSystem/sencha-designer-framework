xds.component.Registry.addDefinition({
    "type": "Ext.calendar.EventBase",
    "className": "Ext.calendar.EventBase",
    "inherits": "Ext.Widget",
    "autoName": "MyEventBase",
    "cfgs": [
        {
            "name": "defaultTitle",
            "type": "string",
            "defaultValue": "(New Event)",
            "bindable": true
        },
        {
            "name": "endDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "mode",
            "type": "string",
            "bindable": true
        },
        {
            "name": "model",
            "type": "object",
            "bindable": true
        },
        {
            "name": "palette",
            "type": "object",
            "bindable": true
        },
        {
            "name": "resize",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "startDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
            "bindable": true
        },
        {
            "name": "touchAction",
            "type": "object",
            "defaultValue": {
                "panX": false,
                "panY": false
            },
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "bindable": true
        }
    ]
});
