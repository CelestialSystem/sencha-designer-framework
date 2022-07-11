xds.component.Registry.addDefinition({
    "type": "Ext.chart.sprite.Label",
    "className": "Ext.chart.sprite.Label",
    "inherits": "Ext.draw.sprite.Text",
    "autoName": "MyLabel",
    "typeAlias": [
        "Ext.chart.label.Label"
    ],
    "cfgs": [
        {
            "name": "calloutLine",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "field",
            "type": "string",
            "bindable": true
        },
        {
            "name": "fx",
            "type": "object",
            "defaultValue": {
                "customDurations": {
                    "callout": 200
                }
            },
            "bindable": true
        },
        {
            "name": "hideLessThan",
            "type": "number",
            "defaultValue": 20,
            "bindable": true
        }
    ]
});
