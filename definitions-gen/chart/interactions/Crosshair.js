xds.component.Registry.addDefinition({
    "type": "Ext.chart.interactions.Crosshair",
    "className": "Ext.chart.interactions.Crosshair",
    "classAlias": "interaction.crosshair",
    "inherits": "Ext.chart.interactions.Abstract",
    "autoName": "MyCrosshair",
    "cfgs": [
        {
            "name": "axes",
            "type": "object",
            "defaultValue": {
                "top": {
                    "label": {},
                    "rect": {}
                },
                "right": {
                    "label": {},
                    "rect": {}
                },
                "bottom": {
                    "label": {},
                    "rect": {}
                },
                "left": {
                    "label": {},
                    "rect": {}
                }
            },
            "bindable": true
        },
        {
            "name": "gesture",
            "type": "string",
            "defaultValue": "drag",
            "bindable": true
        },
        {
            "name": "lines",
            "type": "object",
            "defaultValue": {
                "horizontal": {
                    "strokeStyle": "black",
                    "lineDash": [
                        5,
                        5
                    ]
                },
                "vertical": {
                    "strokeStyle": "black",
                    "lineDash": [
                        5,
                        5
                    ]
                }
            },
            "bindable": true
        }
    ]
});
