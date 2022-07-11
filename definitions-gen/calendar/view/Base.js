xds.component.Registry.addDefinition({
    "type": "Ext.calendar.view.Base",
    "className": "Ext.calendar.view.Base",
    "inherits": "Ext.Widget",
    "mixin": [
        "Ext.mixin.ConfigState"
    ],
    "autoName": "MyBase",
    "cfgs": [
        {
            "name": "addForm",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-form-add"
            },
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
            "bindable": true
        },
        {
            "name": "editForm",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-form-edit"
            },
            "bindable": true
        },
        {
            "name": "eventDefaults",
            "type": "object",
            "defaultValue": {
                "xtype": "calendar-event"
            },
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
