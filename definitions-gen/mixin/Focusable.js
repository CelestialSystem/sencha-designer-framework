xds.component.Registry.addDefinition({
    "type": "Ext.mixin.Focusable",
    "className": "Ext.mixin.Focusable",
    "inherits": "Ext.Base",
    "autoName": "MyFocusable",
    "cfgs": [
        {
            "name": "focusCls",
            "type": "string",
            "defaultValue": "x-focused"
        },
        {
            "name": "focusCls",
            "type": "string",
            "defaultValue": "focus"
        }
    ],
    "eventDefs": [
        {
            "name": "blur",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "focus",
            "params": [
                {
                    "name": "widget",
                    "type": "Ext.Component/Ext.Widget",
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
            "name": "focusenter",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
            "name": "focusleave",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.Component",
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
