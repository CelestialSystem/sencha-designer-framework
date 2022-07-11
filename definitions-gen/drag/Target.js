xds.component.Registry.addDefinition({
    "type": "Ext.drag.Target",
    "className": "Ext.drag.Target",
    "inherits": "Ext.drag.Item",
    "autoName": "MyTarget",
    "cfgs": [
        {
            "name": "accepts",
            "type": "function"
        },
        {
            "name": "invalidCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "validCls",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "beforedrop",
            "params": [
                {
                    "name": "target",
                    "type": "Ext.drag.Target",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
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
            "name": "dragenter",
            "params": [
                {
                    "name": "target",
                    "type": "Ext.drag.Target",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
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
            "name": "dragleave",
            "params": [
                {
                    "name": "target",
                    "type": "Ext.drag.Target",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
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
                    "name": "target",
                    "type": "Ext.drag.Target",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
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
            "name": "drop",
            "params": [
                {
                    "name": "target",
                    "type": "Ext.drag.Target",
                    "optional": true
                },
                {
                    "name": "info",
                    "type": "Ext.drag.Info",
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
