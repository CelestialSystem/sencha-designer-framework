xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.PanZoom",
    "className": "Ext.chart.interactions.PanZoom",
    "classAlias": "interaction.panzoom",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyPanZoom",
    "cfgs": [
        {
            "name": "axes",
            "type": "object",
            "defaultValue": {
                "top": {},
                "right": {},
                "bottom": {},
                "left": {}
            },
            "bindable": true,
            "alternates": [
                {
                    "type": "array"
                }
            ]
        },
        {
            "name": "doubleTapReset",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "overflowArrowOptions",
            "type": "object"
        },
        {
            "name": "showOverflowArrows",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "zoomOnPan",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        }
    ]
});
