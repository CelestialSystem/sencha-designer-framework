xds.component.Registry.addDefinition({
    "type": "Ext.ux.event.Player",
    "className": "Ext.ux.event.Player",
    "inherits": "Ext.ux.event.Driver",
    "autoName": "MyPlayer",
    "cfgs": [
        {
            "name": "eventQueue",
            "type": "array"
        },
        {
            "name": "keyFrameEvents",
            "type": "object",
            "defaultValue": {
                "click": true
            }
        },
        {
            "name": "pauseForAnimations",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "speed",
            "type": "number",
            "defaultValue": 1
        }
    ],
    "eventDefs": [
        {
            "name": "beforeplay",
            "params": [
                {
                    "name": "player",
                    "type": "Ext.ux.event.Player",
                    "optional": true
                },
                {
                    "name": "eventDescriptor",
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
            "name": "keyframe",
            "params": [
                {
                    "name": "player",
                    "type": "Ext.ux.event.Player",
                    "optional": true
                },
                {
                    "name": "eventDescriptor",
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
