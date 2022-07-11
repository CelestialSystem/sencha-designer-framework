xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Days",
    "className": "Ext.calendar.panel.Days",
    "classAlias": "widget.calendar-days",
    "inherits": "Ext.calendar.panel.Base",
    "autoName": "MyDays",
    "cfgs": [
        {
            "name": "allowSelection",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "dayHeader",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-daysheader"
            },
            "bindable": true
        },
        {
            "name": "dayHeaderFormat",
            "type": "string",
            "defaultValue": "format"
        },
        {
            "name": "displayOverlap",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "draggable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "droppable",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "endTime",
            "type": "number",
            "defaultValue": true
        },
        {
            "name": "eventRelayers",
            "type": "object",
            "defaultValue": {
                "view": {
                    "beforeeventdragstart": true,
                    "validateeventdrop": true,
                    "eventdrop": true,
                    "beforeeventresizestart": true,
                    "validateeventresize": true,
                    "eventresize": true
                }
            },
            "bindable": true
        },
        {
            "name": "resizeEvents",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "showNowMarker",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "startTime",
            "type": "number",
            "defaultValue": true
        },
        {
            "name": "timeFormat",
            "type": "string",
            "defaultValue": true
        },
        {
            "name": "view",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-daysview"
            },
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
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
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
            "name": "beforeeventresizestart",
            "params": [
                {
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
            "name": "eventresize",
            "params": [
                {
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
            "name": "validateeventresize",
            "params": [
                {
                    "name": "calendardaysview",
                    "type": "Ext.calendar.view.Days",
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
