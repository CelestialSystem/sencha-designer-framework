xds.component.Registry.addDefinition({
    "type": "Ext.chart.sprite.BoxPlot",
    "className": "Ext.chart.sprite.BoxPlot",
    "classAlias": "sprite.boxplot",
    "inherits": "Ext.draw.sprite.Sprite",
    "autoName": "MyBoxPlot",
    "cfgs": [
        {
            "name": "boxWidth",
            "type": "number",
            "defaultValue": 12
        },
        {
            "name": "crisp",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "high",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "low",
            "type": "number",
            "defaultValue": -20
        },
        {
            "name": "median",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "q1",
            "type": "number",
            "defaultValue": -10
        },
        {
            "name": "q3",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "whiskerWidth",
            "type": "number",
            "defaultValue": 0.5
        },
        {
            "name": "x",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
