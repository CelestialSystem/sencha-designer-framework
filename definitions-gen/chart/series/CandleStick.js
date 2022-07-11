xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.CandleStick",
    "className": "Ext.chart.series.CandleStick",
    "classAlias": "series.candlestick",
    "inherits": "Ext.chart.series.Cartesian",
    "autoName": "MyCandleStick",
    "cfgs": [
        {
            "name": "closeField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "highField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "lowField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "openField",
            "type": "string",
            "bindable": true
        }
    ]
});
