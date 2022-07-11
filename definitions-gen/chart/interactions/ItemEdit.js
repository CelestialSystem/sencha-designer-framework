xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.ItemEdit",
    "className": "Ext.chart.interactions.ItemEdit",
    "classAlias": "interaction.itemedit",
    "inherits": "Ext.chart.interactions.ItemHighlight",
    "autoName": "MyItemEdit",
    "cfgs": [
        {
            "name": "renderer",
            "type": "function",
            "bindable": true,
            "params": [
                {
                    "name": "data",
                    "type": "Object"
                }
            ],
            "alternates": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        },
        {
            "name": "tooltip",
            "type": "object",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        }
    ],
    "eventDefs": [
        {
            "name": "beginitemedit",
            "params": [
                {
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
                    "optional": true
                },
                {
                    "name": "interaction",
                    "type": "Ext.chart.interactions.ItemEdit",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
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
            "name": "enditemedit",
            "params": [
                {
                    "name": "chart",
                    "type": "Ext.chart.AbstractChart",
                    "optional": true
                },
                {
                    "name": "interaction",
                    "type": "Ext.chart.interactions.ItemEdit",
                    "optional": true
                },
                {
                    "name": "item",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "target",
                    "type": "Object",
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
