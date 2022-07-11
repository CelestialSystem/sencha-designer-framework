xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Days",
    "className": "Ext.calendar.view.Days",
    "classAlias": "widget.calendar-daysview",
    "inherits": "Ext.calendar.view.Base",
    "autoName": "MyDays",
    "cfgs": [
        {
            "name": "allowSelection",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "displayOverlap",
            "type": "boolean",
            "defaultValue": true,
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
            "name": "endTime",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        },
        {
            "name": "resizeEvents",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "showNowMarker",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "startTime",
            "type": "number",
            "defaultValue": 8,
            "bindable": true
        },
        {
            "name": "timeFormat",
            "type": "string",
            "defaultValue": "H:i",
            "bindable": true
        },
        {
            "name": "timeRenderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "hour",
                    "type": "Number"
                },
                {
                    "name": "formatted",
                    "type": "String"
                },
                {
                    "name": "firstInGroup",
                    "type": "Boolean"
                }
            ]
        },
        {
            "name": "value",
            "type": "date",
            "defaultValue": "2019-01-23T10:04:35.539Z",
            "bindable": true
        },
        {
            "name": "visibleDays",
            "type": "number",
            "defaultValue": 4,
            "bindable": true
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
