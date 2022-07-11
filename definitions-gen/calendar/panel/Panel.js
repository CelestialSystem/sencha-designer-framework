xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Panel",
    "className": "Ext.calendar.panel.Panel",
    "classAlias": "widget.calendar",
    "inherits": "Ext.calendar.panel.AbstractPanel",
    "mixin": [
        "Ext.mixin.ConfigState"
    ],
    "autoName": "MyPanel",
    "cfgs": [
        {
            "name": "calendarList",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-list",
                "reference": "list",
                "flex": 1
            },
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": "x-calendar-panel",
            "bindable": true
        },
        {
            "name": "compact",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "compactOptions",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "createButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "cls": "x-calendar-panel-create-button",
                "text": "Create"
            },
            "bindable": true
        },
        {
            "name": "createButtonPosition",
            "type": "string",
            "defaultValue": "sideBar",
            "bindable": true
        },
        {
            "name": "dateTitle",
            "type": "object",
            "defaultValue": {
                "xtype": "component",
                "reference": "calTitle",
                "cls": "x-calendar-panel-title",
                "margin": "0 0 0 10"
            },
            "bindable": true
        },
        {
            "name": "defaultView",
            "type": "string",
            "defaultValue": "month"
        },
        {
            "name": "nextButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "text": ">"
            },
            "bindable": true
        },
        {
            "name": "previousButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "text": "<"
            },
            "bindable": true
        },
        {
            "name": "referenceHolder",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "sideBar",
            "type": "object",
            "defaultValue": {
                "xtype": "panel",
                "cls": "x-calendar-sidebar"
            },
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "bindable": true
        },
        {
            "name": "switcher",
            "type": "object",
            "defaultValue": {
                "xtype": "segmentedbutton",
                "reference": "switcher",
                "cls": "x-calendar-panel-switcher",
                "allowMultiple": false
            },
            "bindable": true
        },
        {
            "name": "switcherPosition",
            "type": "string",
            "defaultValue": "titleBar",
            "bindable": true
        },
        {
            "name": "timezoneOffset",
            "type": "number",
            "bindable": true
        },
        {
            "name": "titleBar",
            "type": "object",
            "defaultValue": {
                "xtype": "toolbar"
            },
            "bindable": true
        },
        {
            "name": "todayButton",
            "type": "object",
            "defaultValue": {
                "xtype": "button",
                "text": "Today",
                "margin": "0 10 0 0"
            },
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
            "defaultValue": {
                "day": {
                    "xtype": "calendar-day",
                    "titleTpl": "{start:date(\"l F d, Y\")}",
                    "controlStoreRange": false,
                    "label": "Day",
                    "weight": 10,
                    "dayHeader": null
                },
                "week": {
                    "xtype": "calendar-week",
                    "dayHeaderFormat": "D d",
                    "controlStoreRange": false,
                    "titleTpl": "{start:date(\"j M\")} - {end:date(\"j M Y\")}",
                    "label": "Week",
                    "weight": 20
                },
                "month": {
                    "xtype": "calendar-month",
                    "titleTpl": "{start:date(\"F Y\")}",
                    "label": "Month",
                    "weight": 30
                }
            },
            "bindable": true
        },
        {
            "name": "highlightToday",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
