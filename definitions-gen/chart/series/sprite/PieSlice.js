xds.component.Registry.addDefinition({
    "type": "Ext.chart.series.sprite.PieSlice",
    "className": "Ext.chart.series.sprite.PieSlice",
    "classAlias": "sprite.pieslice",
    "inherits": "Ext.draw.sprite.Sector",
    "mixin": [
        "Ext.chart.MarkerHolder"
    ],
    "autoName": "MyPieSlice",
    "cfgs": [
        {
            "name": "doCallout",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "label",
            "type": "string"
        },
        {
            "name": "labelOverflowPadding",
            "type": "number",
            "defaultValue": 10
        }
    ]
});
