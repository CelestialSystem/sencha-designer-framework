xds.component.Registry.addDefinition({
    "type": "Ext.util.Draggable",
    "className": "Ext.util.Draggable",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyDraggable",
    "cfgs": [
        {
            "name": "component",
            "type": "object",
            "bindable": true
        },
        {
            "name": "direction",
            "type": "string",
            "defaultValue": "both",
            "bindable": true
        },
        {
            "name": "initialOffset",
            "type": "object",
            "defaultValue": {
                "x": 0,
                "y": 0
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "drag",
            "params": [
                {
                    "name": "draggable",
                    "type": "Ext.util.Draggable",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "offsetX",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "offsetY",
                    "type": "Number",
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
            "name": "dragend",
            "params": [
                {
                    "name": "draggable",
                    "type": "Ext.util.Draggable",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "offsetX",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "offsetY",
                    "type": "Number",
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
            "name": "dragstart",
            "params": [
                {
                    "name": "draggable",
                    "type": "Ext.util.Draggable",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "offsetX",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "offsetY",
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
