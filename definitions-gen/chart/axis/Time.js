xds.component.Registry.addDefinition({
    "type": "Ext.chart.axis.Time",
    "className": "Ext.chart.axis.Time",
    "classAlias": "axis.time",
    "inherits": "Ext.chart.axis.Numeric",
    "autoName": "MyTime",
    "cfgs": [
        {
            "name": "dateFormat",
            "type": "string",
            "bindable": true
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
