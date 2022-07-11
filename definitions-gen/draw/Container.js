xds.component.Registry.addDefinition({
    "type": "Ext.draw.Container",
    "className": "Ext.draw.Container",
    "classAlias": "widget.draw",
    "inherits": "Ext.draw.ContainerBase",
    "autoName": "MyContainer",
    "typeAlias": [
        "Ext.draw.Component"
    ],
    "cfgs": [
        {
            "name": "downloadServerUrl",
            "type": "string",
            "bindable": true
        },
        {
            "name": "engine",
            "type": "string",
            "defaultValue": "Ext.draw.engine.Canvas"
        },
        {
            "name": "gradients",
            "type": "array",
            "defaultValue": [],
            "bindable": true
        },
        {
            "name": "resizeHandler",
            "type": "function",
            "bindable": true
        },
        {
            "name": "sprites",
            "type": "array",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "bodyresize",
            "params": [
                {
                    "name": "size",
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
            "name": "spriteclick",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritedblclick",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritemousedown",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritemousemove",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritemouseout",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritemouseover",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritemouseup",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
            "name": "spritetap",
            "params": [
                {
                    "name": "sprite",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Event",
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
