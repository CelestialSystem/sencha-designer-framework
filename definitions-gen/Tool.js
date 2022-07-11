xds.component.Registry.addDefinition({
    "type": "Ext.Tool",
    "className": "Ext.Tool",
    "classAlias": "widget.tool",
    "inherits": "Ext.Component",
    "autoName": "MyTool",
    "typeAlias": [
        "Ext.panel.Tool"
    ],
    "cfgs": [
        {
            "name": "handler",
            "type": "function",
            "params": [
                {
                    "name": "owner",
                    "type": "Ext.Component"
                },
                {
                    "name": "tool",
                    "type": "Ext.Tool"
                },
                {
                    "name": "event",
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
            "name": "iconCls",
            "type": "string",
            "bindable": true
        },
        {
            "name": "passive",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "scope",
            "type": "object"
        },
        {
            "name": "stopEvent",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "toolOwner",
            "type": "object"
        },
        {
            "name": "type",
            "type": "string",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "click",
            "params": [
                {
                    "name": "tool",
                    "type": "Ext.Tool",
                    "optional": true
                },
                {
                    "name": "e",
                    "type": "Ext.event.Event",
                    "optional": true
                },
                {
                    "name": "owner",
                    "type": "Ext.Component",
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
