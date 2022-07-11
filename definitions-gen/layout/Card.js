xds.component.Registry.addDefinition({
    "type": "Ext.layout.Card",
    "className": "Ext.layout.Card",
    "classAlias": "layout.card",
    "inherits": "Ext.layout.Auto",
    "autoName": "MyCard",
    "cfgs": [
        {
            "name": "animation",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "deferRender",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "indicator",
            "type": "object",
            "defaultValue": {
                "xtype": "indicator",
                "flex": 1
            },
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "activeitemchange",
            "params": [
                {
                    "name": "card",
                    "type": "Ext.layout.Card",
                    "optional": true
                },
                {
                    "name": "newActiveItem",
                    "type": "Mixed",
                    "optional": true
                },
                {
                    "name": "oldActiveItem",
                    "type": "Mixed",
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
