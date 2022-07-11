xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Border",
    "className": "Ext.layout.container.Border",
    "classAlias": "layout.border",
    "inherits": "Ext.layout.container.Container",
    "autoName": "MyBorder",
    "typeAlias": [
        "Ext.layout.BorderLayout"
    ],
    "cfgs": [
        {
            "name": "padding",
            "type": "number",
            "alternates": [
                {
                    "type": "string"
                },
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "regionWeights",
            "type": "object",
            "defaultValue": {
                "north": 20,
                "south": 10,
                "center": 0,
                "west": -10,
                "east": -20
            }
        },
        {
            "name": "split",
            "type": "boolean"
        },
        {
            "name": "splitterResize",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
