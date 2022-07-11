xds.component.Registry.addDefinition({
    "type": "Ext.tab.Tab",
    "className": "Ext.tab.Tab",
    "classAlias": "widget.tab",
    "inherits": "Ext.button.Button",
    "autoName": "MyTab",
    "cfgs": [
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "closeText",
            "type": "string",
            "defaultValue": "removable"
        },
        {
            "name": "rotation",
            "type": "string",
            "editor": "options",
            "options": [
                [
                    "default",
                    "default"
                ],
                [
                    "0",
                    0
                ],
                [
                    "1",
                    1
                ],
                [
                    "2",
                    2
                ]
            ],
            "defaultValue": "default",
            "bindable": true
        },
        {
            "name": "tabPosition",
            "type": "string",
            "editor": "options",
            "options": [
                "bottom",
                "left",
                "right",
                "top"
            ],
            "defaultValue": "top",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "activate",
            "params": [
                {
                    "name": "tab",
                    "type": "Ext.tab.Tab",
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
            "name": "beforeclose",
            "params": [
                {
                    "name": "tab",
                    "type": "Ext.tab.Tab",
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
            "name": "close",
            "params": [
                {
                    "name": "tab",
                    "type": "Ext.tab.Tab",
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
            "name": "deactivate",
            "params": [
                {
                    "name": "tab",
                    "type": "Ext.tab.Tab",
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
