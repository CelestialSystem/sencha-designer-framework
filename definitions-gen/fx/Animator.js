xds.component.Registry.addDefinition({
    "type": "Ext.fx.Animator",
    "className": "Ext.fx.Animator",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyAnimator",
    "cfgs": [
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
            "name": "iterations",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "keyframes",
            "type": "object"
        },
        {
            "name": "target",
            "type": "object"
        }
    ],
    "eventDefs": [
        {
            "name": "afteranimate",
            "params": [
                {
                    "name": "animator",
                    "type": "Ext.fx.Animator",
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
                    "name": "animator",
                    "type": "Ext.fx.Animator",
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
            "name": "keyframe",
            "params": [
                {
                    "name": "animator",
                    "type": "Ext.fx.Animator",
                    "optional": true
                },
                {
                    "name": "keyframe",
                    "type": "Number",
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
