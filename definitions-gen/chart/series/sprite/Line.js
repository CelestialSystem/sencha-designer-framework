xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Line",
    "className": "Ext.chart.series.sprite.Line",
    "classAlias": "sprite.lineSeries",
    "inherits": "Ext.chart.series.sprite.Aggregative",
    "autoName": "MyLine",
    "cfgs": [
        {
            "name": "curve",
            "type": "object",
            "defaultValue": {
                "type": "linear"
            }
        },
        {
            "name": "fillArea",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "nullStyle",
            "type": "string",
            "editor": "options",
            "options": [
                "connect",
                "gap",
                "origin"
            ],
            "defaultValue": "gap"
        },
        {
            "name": "preciseStroke",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "yCap",
            "type": "number",
            "defaultValue": 1048576
        }
    ]
});
