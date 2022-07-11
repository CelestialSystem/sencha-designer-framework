xds.component.Registry.addDefinition({
    "type": "Ext.form.Panel",
    "className": "Ext.form.Panel",
    "classAlias": "widget.form",
    "inherits": "Ext.panel.Panel",
    "mixin": [
        "Ext.form.FieldAncestor"
    ],
    "autoName": "MyPanel",
    "typeAlias": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
    ],
    "cfgs": [
        {
            "name": "api",
            "type": "object"
        },
        {
            "name": "baseParams",
            "type": "object"
        },
        {
            "name": "errorReader",
            "type": "object"
        },
        {
            "name": "jsonSubmit",
            "type": "boolean"
        },
        {
            "name": "layout",
            "type": "string",
            "defaultValue": "anchor",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "method",
            "type": "string"
        },
        {
            "name": "paramOrder",
            "type": "typedarray",
            "collapseSingleValue": true
        },
        {
            "name": "paramsAsHash",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "pollForChanges",
            "type": "boolean"
        },
        {
            "name": "pollInterval",
            "type": "number"
        },
        {
            "name": "reader",
            "type": "object"
        },
        {
            "name": "standardSubmit",
            "type": "boolean"
        },
        {
            "name": "timeout",
            "type": "number",
            "defaultValue": 30
        },
        {
            "name": "trackResetOnLoad",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "url",
            "type": "string"
        },
        {
            "name": "waitMsgTarget",
            "type": "string"
        },
        {
            "name": "waitTitle",
            "type": "string",
            "defaultValue": "Please Wait..."
        }
    ],
    "eventDefs": [
        {
            "name": "actioncomplete",
            "params": [
                {
                    "name": "basic",
                    "type": "Ext.form.Basic",
                    "optional": true
                },
                {
                    "name": "action",
                    "type": "Ext.form.action.Action",
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
            "name": "actionfailed",
            "params": [
                {
                    "name": "basic",
                    "type": "Ext.form.Basic",
                    "optional": true
                },
                {
                    "name": "action",
                    "type": "Ext.form.action.Action",
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
            "name": "beforeaction",
            "params": [
                {
                    "name": "basic",
                    "type": "Ext.form.Basic",
                    "optional": true
                },
                {
                    "name": "action",
                    "type": "Ext.form.action.Action",
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
            "name": "dirtychange",
            "params": [
                {
                    "name": "basic",
                    "type": "Ext.form.Basic",
                    "optional": true
                },
                {
                    "name": "dirty",
                    "type": "Boolean",
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
            "name": "validitychange",
            "params": [
                {
                    "name": "basic",
                    "type": "Ext.form.Basic",
                    "optional": true
                },
                {
                    "name": "valid",
                    "type": "Boolean",
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
