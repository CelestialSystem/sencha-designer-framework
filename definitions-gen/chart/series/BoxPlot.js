xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.BoxPlot",
    "className": "Ext.chart.series.BoxPlot",
    "classAlias": "series.boxplot",
    "inherits": "Ext.chart.series.Cartesian",
    "autoName": "MyBoxPlot",
    "cfgs": [
        {
            "name": "highField",
            "type": "string",
            "defaultValue": "high",
            "bindable": true
        },
        {
            "name": "lowField",
            "type": "string",
            "defaultValue": "low",
            "bindable": true
        },
        {
            "name": "medianField",
            "type": "string",
            "defaultValue": "median",
            "bindable": true
        },
        {
            "name": "q1Field",
            "type": "string",
            "defaultValue": "q1",
            "bindable": true
        },
        {
            "name": "q3Field",
            "type": "string",
            "defaultValue": "q3",
            "bindable": true
        }
    ]
});
