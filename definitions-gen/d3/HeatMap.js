xds.component.Registry.addDefinition({
    "type": "Ext.d3.HeatMap",
    "className": "Ext.d3.HeatMap",
    "classAlias": "widget.d3-heatmap",
    "inherits": "Ext.d3.svg.Svg",
    "mixin": [
        "Ext.d3.mixin.ToolTip"
    ],
    "autoName": "MyHeatMap",
    "cfgs": [
        {
            "name": "colorAxis",
            "type": "object",
            "defaultValue": {},
            "bindable": true
        },
        {
            "name": "labels",
            "type": "object",
            "defaultValue": true,
            "bindable": true,
            "alternates": [
                {
                    "type": "boolean"
                }
            ]
        },
        {
            "name": "legend",
            "type": "object",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "tiles",
            "type": "object",
            "bindable": true
        },
        {
            "name": "xAxis",
            "type": "object",
            "defaultValue": {
                "axis": {
                    "orient": "bottom"
                },
                "scale": {
                    "type": "linear"
                }
            },
            "bindable": true
        },
        {
            "name": "yAxis",
            "type": "object",
            "defaultValue": {
                "axis": {
                    "orient": "left"
                },
                "scale": {
                    "type": "linear"
                }
            },
            "bindable": true
        }
    ]
});
