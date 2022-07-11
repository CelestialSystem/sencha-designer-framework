xds.component.Registry.addDefinition({
    "type": "Ext.plugin.MouseEnter",
    "className": "Ext.plugin.MouseEnter",
    "classAlias": "plugin.mouseenter",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyMouseEnter",
    "cfgs": [
        {
            "name": "delay",
            "type": "number"
        },
        {
            "name": "delegate",
            "type": "string"
        },
        {
            "name": "element",
            "type": "object",
            "defaultValue": "el",
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "handler",
            "type": "string",
            "alternates": [
                {
                    "type": "function",
                    "params": [
                        {
                            "name": "e",
                            "type": "Ext.event.Event"
                        },
                        {
                            "name": "target",
                            "type": "HTMLElement"
                        }
                    ]
                }
            ]
        },
        {
            "name": "leaveHandler",
            "type": "string",
            "alternates": [
                {
                    "type": "function",
                    "params": [
                        {
                            "name": "e",
                            "type": "Ext.event.Event"
                        },
                        {
                            "name": "target",
                            "type": "HTMLElement"
                        }
                    ]
                }
            ]
        },
        {
            "name": "scope",
            "type": "object"
        }
    ]
});
