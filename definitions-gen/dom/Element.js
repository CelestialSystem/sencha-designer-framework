xds.component.Registry.addDefinition({
    "type": "Ext.dom.Element",
    "className": "Ext.dom.Element",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.util.Positionable",
        "Ext.mixin.Observable"
    ],
    "autoName": "MyElement",
    "typeAlias": [
        "Ext.Element"
    ],
    "cfgs": [
        {
            "name": "listeners",
            "type": "object",
            "hidden": true,
            "canSetValue": false
        }
    ],
    "eventDefs": [
        {
            "name": "abort",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "blur",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "change",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "click",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "contextmenu",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "dblclick",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMActivate",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMAttrModified",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMCharacterDataModified",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMFocusIn",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMFocusOut",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMNodeInserted",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMNodeInsertedIntoDocument",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMNodeRemoved",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMNodeRemovedFromDocument",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "DOMSubtreeModified",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "doubletap",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "error",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "focus",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "focusmove",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "keydown",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "keypress",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "keyup",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "load",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "longpress",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "mouseenter",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "mouseleave",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "mousemove",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "mouseout",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "mouseover",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "painted",
            "params": [
                {
                    "name": "element",
                    "type": "Ext.dom.Element",
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
            "name": "pinch",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "pinchend",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "pinchstart",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "reset",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "resize",
            "params": [
                {
                    "name": "element",
                    "type": "Ext.dom.Element",
                    "optional": true
                },
                {
                    "name": "info",
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
            "name": "rotate",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "rotateend",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "rotatestart",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "scroll",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "select",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "singletap",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "submit",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
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
            "name": "swipe",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "taphold",
            "params": [
                {
                    "name": "event",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "node",
                    "type": "HTMLElement",
                    "optional": true
                },
                {
                    "name": "options",
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
            "name": "unload",
            "params": [
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "t",
                    "type": "HTMLElement",
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
