xds.component.Registry.addDefinition({
    "type": "Ext.calendar.panel.Base",
    "className": "Ext.calendar.panel.Base",
    "inherits": "Ext.calendar.panel.AbstractBase",
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "addForm",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "cls",
            "type": "typedarray",
            "collapseSingleValue": true,
            "defaultValue": [
                "x-calendar-base",
                "x-unselectable"
            ],
            "bindable": true
        },
        {
            "name": "compact",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "compactOptions",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "controlStoreRange",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "dayHeader",
            "type": "object",
            "bindable": true
        },
        {
            "name": "editForm",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "eventDefaults",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "gestureNavigation",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "store",
            "type": "object",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "timezoneOffset",
            "type": "number",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "twoWayBindable",
            "type": "string",
            "defaultValue": {
                "value": 1
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "value",
            "type": "date",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "view",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforeeventadd",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "beforeeventedit",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "eventadd",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "eventedit",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "eventtap",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "validateeventadd",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "validateeventedit",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
            "name": "valuechange",
            "params": [
                {
                    "name": "base",
                    "type": "Ext.calendar.view.Base",
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
