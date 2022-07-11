xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Weeks",
    "className": "Ext.calendar.view.Weeks",
    "classAlias": "widget.calendar-weeksview",
    "inherits": "Ext.calendar.view.Base",
    "autoName": "MyWeeks",
    "cfgs": [
        {
            "name": "addOnSelect",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "allowSelection",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "compactOptions",
            "type": "object",
            "defaultValue": {
                "overflowText": "+{0}",
                "showOverflow": "top"
            },
            "bindable": true
        },
        {
            "name": "dayFormat",
            "type": "string",
            "defaultValue": "j",
            "bindable": true
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "droppable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "firstDayOfWeek",
            "type": "number",
            "bindable": true
        },
        {
            "name": "overflowText",
            "type": "string",
            "defaultValue": "+{0} more",
            "bindable": true
        },
        {
            "name": "showOverflow",
            "type": "string",
            "defaultValue": "bottom",
            "bindable": true
        },
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:04:35.540Z",
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": 7,
            "bindable": true
        },
        {
            "name": "visibleWeeks",
            "type": "number",
            "defaultValue": 2,
            "bindable": true
        },
        {
            "name": "weekendDays",
            "type": "array",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeeventdragstart",
            "params": [
                {
                    "name": "calendarweeksview",
                    "type": "Ext.calendar.view.Weeks",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "eventdrop",
            "params": [
                {
                    "name": "calendarweeksview",
                    "type": "Ext.calendar.view.Weeks",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "select",
            "params": [
                {
                    "name": "calendarweeksview",
                    "type": "Ext.calendar.view.Weeks",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "selectrange",
            "params": [
                {
                    "name": "calendarweeksview",
                    "type": "Ext.calendar.view.Weeks",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        },
        {
            "name": "validateeventdrop",
            "params": [
                {
                    "name": "calendarweeksview",
                    "type": "Ext.calendar.view.Weeks",
                    "optional": true
                },
                {
                    "name": "context",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
