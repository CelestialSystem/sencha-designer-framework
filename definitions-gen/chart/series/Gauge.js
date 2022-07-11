xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.Gauge",
    "className": "Ext.chart.series.Gauge",
    "classAlias": "series.gauge",
    "inherits": "Ext.chart.series.Polar",
    "autoName": "MyGauge",
    "cfgs": [
        {
            "name": "angleField",
            "type": "string",
            "bindable": true
        },
        {
            "name": "colors",
            "type": "array",
            "bindable": true
        },
        {
            "name": "donut",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        },
        {
            "name": "maximum",
            "type": "number",
            "defaultValue": 100,
            "bindable": true
        },
        {
            "name": "minimum",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "needle",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "needleLength",
            "type": "number",
            "defaultValue": 90,
            "bindable": true
        },
        {
            "name": "needleWidth",
            "type": "number",
            "defaultValue": 4,
            "bindable": true
        },
        {
            "name": "sectors",
            "type": "array",
            "bindable": true
        },
        {
            "name": "showInLegend",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "totalAngle",
            "type": "number",
            "defaultValue": 1.5707963267948966,
            "bindable": true
        },
        {
            "name": "value",
            "type": "number",
            "bindable": true
        },
        {
            "name": "wholeDisk",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
