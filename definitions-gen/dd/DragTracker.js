xds.component.Registry.addDefinition({
    "type": "Ext.dd.DragTracker",
    "className": "Ext.dd.DragTracker",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyDragTracker",
    "cfgs": [
        {
            "name": "autoStart",
            "type": "auto",
            "allowBoolean": true,
            "defaultValue": false
        },
        {
            "name": "constrainTo",
            "type": "object"
        },
        {
            "name": "delegate",
            "type": "string"
        },
        {
            "name": "el",
            "type": "object",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "overCls",
            "type": "string"
        },
        {
            "name": "preventDefault",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "stopEvent",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "tolerance",
            "type": "number",
            "defaultValue": 5
        },
        {
            "name": "trackOver",
            "type": "boolean",
            "defaultValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "beforedragstart",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "drag",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "dragend",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "dragstart",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mousedown",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mousemove",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mouseout",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mouseover",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "HTMLElement",
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
            "name": "mouseup",
            "params": [
                {
                    "name": "object",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "e",
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
