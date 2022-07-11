xds.component.Registry.addDefinition({
    "type": "Ext.d3.hierarchy.partition.Sunburst",
    "className": "Ext.d3.hierarchy.partition.Sunburst",
    "classAlias": "widget.d3-sunburst",
    "inherits": "Ext.d3.hierarchy.partition.Partition",
    "autoName": "MySunburst",
    "cfgs": [
        {
            "name": "textPadding",
            "type": "array",
            "defaultValue": [
                5,
                "0.35em"
            ],
            "bindable": true
        },
        {
            "name": "zoomParentDotRadius",
            "type": "number",
            "defaultValue": 30,
            "bindable": true
        }
    ]
});
