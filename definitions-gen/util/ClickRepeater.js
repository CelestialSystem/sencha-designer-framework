xds.component.Registry.addDefinition({
    "type": "Ext.util.ClickRepeater",
    "className": "Ext.util.ClickRepeater",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MyClickRepeater",
    "typeAlias": [
        "Ext.util.TapRepeater"
    ],
    "cfgs": [
        {
            "name": "accelerate",
            "type": "boolean"
        },
        {
            "name": "delay",
            "type": "number",
            "defaultValue": 250
        },
        {
            "name": "el",
            "type": "object",
            "bindable": true
        },
        {
            "name": "el",
            "type": "string"
        },
        {
            "name": "handler",
            "type": "function",
            "params": [
                {
                    "name": "clickRepeater",
                    "type": "Ext.util.ClickRepeater"
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "interval",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "pressedCls",
            "type": "string"
        },
        {
            "name": "preventDefault",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "scope",
            "type": "object",
            "bindable": true
        },
        {
            "name": "stopDefault",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "target",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "click",
            "params": [
                {
                    "name": "clickrepeater",
                    "type": "Ext.util.ClickRepeater",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mousedown",
            "params": [
                {
                    "name": "clickrepeater",
                    "type": "Ext.util.ClickRepeater",
                    "optional": true
                },
                {
                    "name": "e",
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
            "name": "mouseup",
            "params": [
                {
                    "name": "clickrepeater",
                    "type": "Ext.util.ClickRepeater",
                    "optional": true
                },
                {
                    "name": "e",
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
