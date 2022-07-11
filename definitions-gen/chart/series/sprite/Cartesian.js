xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Cartesian",
    "className": "Ext.chart.series.sprite.Cartesian",
    "inherits": "Ext.chart.series.sprite.Series",
    "autoName": "MyCartesian",
    "cfgs": [
        {
            "name": "flipXY",
            "type": "boolean"
        },
        {
            "name": "selectionTolerance",
            "type": "number",
            "defaultValue": 20
        }
    ]
});
