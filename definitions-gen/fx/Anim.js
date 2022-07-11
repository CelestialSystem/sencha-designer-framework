xds.component.Registry.addDefinition({
    "type": "Ext.fx.Anim",
    "className": "Ext.fx.Anim",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyAnim",
    "cfgs": [
        {
            "name": "alternate",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "autoEnd",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "callback",
            "type": "function",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "delay",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "duration",
            "type": "number",
            "defaultValue": 250
        },
        {
            "name": "dynamic",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "easing",
            "type": "string",
            "defaultValue": "ease"
        },
        {
            "name": "from",
            "type": "object"
        },
        {
            "name": "iterations",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "keyframes",
            "type": "object"
        },
        {
            "name": "remove",
            "type": "boolean"
        },
        {
            "name": "reverse",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "target",
            "type": "string",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "to",
            "type": "object"
        }
    ],
    "eventDefs": [
        {
            "name": "afteranimate",
            "params": [
                {
                    "name": "anim",
                    "type": "Ext.fx.Anim",
                    "optional": true
                },
                {
                    "name": "startTime",
                    "type": "Date",
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
            "name": "beforeanimate",
            "params": [
                {
                    "name": "anim",
                    "type": "Ext.fx.Anim",
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
            "name": "lastframe",
            "params": [
                {
                    "name": "anim",
                    "type": "Ext.fx.Anim",
                    "optional": true
                },
                {
                    "name": "startTime",
                    "type": "Date",
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
