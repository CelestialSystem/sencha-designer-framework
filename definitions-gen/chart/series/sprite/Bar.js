xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Bar",
    "className": "Ext.chart.series.sprite.Bar",
    "classAlias": "sprite.barSeries",
    "inherits": "Ext.chart.series.sprite.StackedCartesian",
    "autoName": "MyBar",
    "cfgs": [
        {
            "name": "inGroupGapWidth",
            "type": "number",
            "defaultValue": 3
        },
        {
            "name": "maxBarWidth",
            "type": "number",
            "defaultValue": 100
        },
        {
            "name": "minBarWidth",
            "type": "number",
            "defaultValue": 2
        },
        {
            "name": "minGapWidth",
            "type": "number",
            "defaultValue": 5
        },
        {
            "name": "radius",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
