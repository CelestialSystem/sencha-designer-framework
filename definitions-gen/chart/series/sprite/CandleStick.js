xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.CandleStick",
    "className": "Ext.chart.series.sprite.CandleStick",
    "classAlias": "sprite.candlestickSeries",
    "inherits": "Ext.chart.series.sprite.Aggregative",
    "autoName": "MyCandleStick",
    "cfgs": [
        {
            "name": "barWidth",
            "type": "number",
            "defaultValue": 15
        },
        {
            "name": "ohlcType",
            "type": "string",
            "defaultValue": "candlestick"
        },
        {
            "name": "padding",
            "type": "number",
            "defaultValue": 3
        }
    ]
});
