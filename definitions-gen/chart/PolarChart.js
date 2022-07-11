xds.component.Registry.addDefinition({
    "type": "Ext.chart.PolarChart",
    "className": "Ext.chart.PolarChart",
    "classAlias": "widget.polar",
    "inherits": "Ext.chart.AbstractChart",
    "autoName": "MyPolarChart",
    "cfgs": [
        {
            "name": "center",
            "type": "array",
            "defaultValue": [
                0,
                0
            ],
            "bindable": true
        },
        {
            "name": "innerPadding",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "radius",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        }
    ]
});
