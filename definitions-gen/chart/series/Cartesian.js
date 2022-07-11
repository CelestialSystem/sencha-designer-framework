xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Cartesian",
    "className": "Ext.chart.series.Cartesian",
    "inherits": "Ext.chart.series.Series",
    "autoName": "MyCartesian",
    "cfgs": [
        {
            "name": "xAxis",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "xField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "yAxis",
            "type": "object",
            "bindable": true,
            "alternates": [
                {
                    "type": "number"
                },
                {
                    "type": "string"
                }
            ]
        },
        {
            "name": "yField",
            "type": "typedarray",
            "collapseSingleValue": true,
            "bindable": true
        }
    ]
});
