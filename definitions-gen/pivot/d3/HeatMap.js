xds.component.Registry.addDefinition({
    "type": "Ext.pivot.d3.HeatMap",
    "className": "Ext.pivot.d3.HeatMap",
    "classAlias": "widget.pivotheatmap",
    "inherits": "Ext.d3.HeatMap",
    "autoName": "MyHeatMap",
    "cfgs": [
        {
            "name": "defaultFormatter",
            "type": "string",
            "defaultValue": "number(\"0.00\")",
            "bindable": true
        },
        {
            "name": "matrix",
            "type": "object",
            "defaultValue": {
                "type": "local",
                "rowGrandTotalsPosition": "none",
                "colGrandTotalsPosition": "none"
            },
            "bindable": true
        }
    ]
});
