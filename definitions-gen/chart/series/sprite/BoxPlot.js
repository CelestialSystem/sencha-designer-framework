xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.BoxPlot",
    "className": "Ext.chart.series.sprite.BoxPlot",
    "classAlias": "sprite.boxplotSeries",
    "inherits": "Ext.chart.series.sprite.Cartesian",
    "autoName": "MyBoxPlot",
    "cfgs": [
        {
            "name": "dataHigh",
            "type": "array"
        },
        {
            "name": "dataLow",
            "type": "array"
        },
        {
            "name": "dataMedian",
            "type": "array"
        },
        {
            "name": "dataQ1",
            "type": "array"
        },
        {
            "name": "dataQ3",
            "type": "array"
        },
        {
            "name": "maxBoxWidth",
            "type": "number",
            "defaultValue": 20
        },
        {
            "name": "minBoxWidth",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "minGapWidth",
            "type": "number",
            "defaultValue": 5
        }
    ]
});
