xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Bar3D",
    "className": "Ext.chart.series.sprite.Bar3D",
    "classAlias": "sprite.bar3dSeries",
    "inherits": "Ext.chart.series.sprite.Bar",
    "autoName": "MyBar3D",
    "cfgs": [
        {
            "name": "brightnessFactor",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "colorSpread",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "saturationFactor",
            "type": "number",
            "defaultValue": 1
        }
    ]
});
