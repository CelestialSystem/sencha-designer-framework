xds.component.Registry.addDefinition({
    "type": "Ext.chart.legend.Legend",
    "className": "Ext.chart.legend.Legend",
    "classAlias": "widget.legend",
    "inherits": "Ext.chart.legend.LegendBase",
    "autoName": "MyLegend",
    "typeAlias": [
        "Ext.chart.Legend"
    ],
    "cfgs": [
        {
            "name": "rect",
            "type": "array",
            "bindable": true
        },
        {
            "name": "toggleable",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        }
    ]
});
