xds.component.Registry.addDefinition({
    "type": "Ext.chart.CartesianChart",
    "className": "Ext.chart.CartesianChart",
    "classAlias": "widget.cartesian",
    "inherits": "Ext.chart.AbstractChart",
    "autoName": "MyCartesianChart",
    "typeAlias": [
        "Ext.chart.Chart"
    ],
    "cfgs": [
        {
            "name": "flipXY",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "innerPadding",
            "type": "object",
            "defaultValue": {
                "top": 0,
                "left": 0,
                "right": 0,
                "bottom": 0
            },
            "bindable": true
        }
    ]
});
