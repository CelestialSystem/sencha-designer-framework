xds.component.Registry.addDefinition({
    "type": "Ext.button.Split",
    "className": "Ext.button.Split",
    "classAlias": "widget.splitbutton",
    "inherits": "Ext.button.Button",
    "autoName": "MySplit",
    "typeAlias": [
        "Ext.SplitButton"
    ],
    "cfgs": [
        {
            "name": "arrowHandler",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "splitbutton",
                    "type": "Ext.button.Split"
                },
                {
                    "name": "e",
                    "type": "Event"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "arrowTooltip",
            "type": "string"
        }
    ],
    "eventDefs": [
        {
            "name": "arrowclick",
            "params": [
                {
                    "name": "splitbutton",
                    "type": "Ext.button.Split",
                    "optional": true
                },
                {
                    "name": "e",
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
