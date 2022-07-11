xds.component.Registry.addDefinition({
    "type": "Ext.drag.Source",
    "className": "Ext.drag.Source",
    "inherits": "Ext.drag.Item",
    "autoName": "MySource",
    "cfgs": [
        {
            "name": "activeCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "activeOnLongPress",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "typedarray",
                    "collapseSingleValue": true
                }
            ]
        },
        {
            "name": "constrain",
            "type": "object",
            "bindable": true
        },
        {
            "name": "describe",
            "type": "function"
        },
        {
            "name": "handle",
            "type": "string",
            "bindable": true
        },
        {
            "name": "proxy",
            "type": "string",
            "defaultValue": "original",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "revert",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "beforedragstart",
            "params": [
                {
                    "name": "source",
                    "type": "Ext.drag.Source",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
            "name": "dragcancel",
            "params": [
                {
                    "name": "source",
                    "type": "Ext.drag.Source",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
                    "name": "source",
                    "type": "Ext.drag.Source",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
            "name": "dragmove",
            "params": [
                {
                    "name": "source",
                    "type": "Ext.drag.Source",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
                    "name": "source",
                    "type": "Ext.drag.Source",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
                    "optional": true
                },
                {
                    "name": "event",
                    "type": "Ext.event.Event",
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
