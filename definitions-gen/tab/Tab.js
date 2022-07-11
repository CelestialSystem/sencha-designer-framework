xds.component.Registry.addDefinition({
    "type": "Ext.tab.Tab",
    "className": "Ext.tab.Tab",
    "classAlias": "widget.tab",
    "inherits": "Ext.Button",
    "autoName": "MyTab",
    "typeAlias": [
        "Ext.Tab"
    ],
    "cfgs": [
        {
            "name": "active",
            "type": "boolean",
            "bindable": true
        },
        {
            "name": "closable",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "title",
            "type": "string",
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
