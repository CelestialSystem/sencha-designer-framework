xds.component.Registry.addDefinition({
    "type": "Ext.chart.axis.Time3D",
    "className": "Ext.chart.axis.Time3D",
    "classAlias": "axis.time3d",
    "inherits": "Ext.chart.axis.Numeric3D",
    "autoName": "MyTime3D",
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "fromDate",
            "type": "date",
            "bindable": true
        },
        {
            "name": "toDate",
            "type": "date",
            "bindable": true
        }
    ]
});
