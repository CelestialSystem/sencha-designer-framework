xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.Series",
    "className": "Ext.chart.series.sprite.Series",
    "inherits": "Ext.draw.sprite.Sprite",
    "mixin": [
        "Ext.chart.MarkerHolder"
    ],
    "autoName": "MySeries",
    "cfgs": [
        {
            "name": "dataMaxX",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "dataMaxY",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "dataMinX",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "dataMinY",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "dataX",
            "type": "object"
        },
        {
            "name": "dataY",
            "type": "object"
        },
        {
            "name": "field",
            "type": "string",
            "bindable": true
        },
        {
            "name": "labelOverflowPadding",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "labels",
            "type": "object"
        },
        {
            "name": "rangeX",
            "type": "array"
        },
        {
            "name": "rangeY",
            "type": "array"
        }
    ]
});
