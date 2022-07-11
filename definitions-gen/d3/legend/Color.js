xds.component.Registry.addDefinition({
    "type": "Ext.d3.legend.Color",
    "className": "Ext.d3.legend.Color",
    "inherits": "Ext.d3.legend.Legend",
    "autoName": "MyColor",
    "cfgs": [
        {
            "name": "axis",
            "type": "object",
            "bindable": true
        },
        {
            "name": "items",
            "type": "object",
            "defaultValue": {
                "count": 5,
                "slice": null,
                "reverse": false,
                "size": {
                    "x": 30,
                    "y": 30
                }
            },
            "bindable": true
        }
    ]
});
