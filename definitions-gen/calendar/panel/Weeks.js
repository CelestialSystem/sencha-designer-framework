xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Weeks",
    "className": "Ext.calendar.panel.Weeks",
    "classAlias": "widget.calendar-weeks",
    "inherits": "Ext.calendar.panel.Base",
    "autoName": "MyWeeks",
    "cfgs": [
        {
            "name": "addOnSelect",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "allowSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "dayFormat",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "dayHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-weeksheader"
            },
            "bindable": true
        },
        {
            "name": "dayHeaderFormat",
            "type": "string",
            "defaultValue": "format"
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
            "defaultValue": true
        },
        {
            "name": "eventRelayers",
            "type": "object",
            "defaultValue": {
                "view": {
                    "beforeeventdragstart": true,
                    "validateeventdrop": true,
                    "eventdrop": true
                }
            },
            "bindable": true
        },
        {
            "name": "firstDayOfWeek",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "overflowText",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "showOverflow",
            "type": "string",
            "defaultValue": true
        },
        {
            "name": "view",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-weeksview"
            },
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": true
        },
        {
            "name": "visibleWeeks",
            "type": "number",
            "defaultValue": true
        },
        {
            "name": "weekendDays",
            "type": "array",
            "defaultValue": true
        },
        {
            "name": "highlightToday",
            "type": "boolean",
            "defaultValue": true
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
