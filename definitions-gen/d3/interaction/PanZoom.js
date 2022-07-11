xds.component.Registry.addDefinition({
    "type": "Ext.d3.interaction.PanZoom",
    "className": "Ext.d3.interaction.PanZoom",
    "classAlias": "d3.interaction.panzoom",
    "inherits": "Ext.d3.interaction.Abstract",
    "autoName": "MyPanZoom",
    "cfgs": [
        {
            "name": "contentRect",
            "type": "function",
            "bindable": true
        },
        {
            "name": "indicator",
            "type": "object",
            "defaultValue": {
                "parent": "element"
            },
            "bindable": true
        },
        {
            "name": "pan",
            "type": "object",
            "defaultValue": {
                "gesture": "drag",
                "constrain": true,
                "momentum": {
                    "friction": 1,
                    "spring": 0.2
                }
            },
            "bindable": true
        },
        {
            "name": "viewportRect",
            "type": "function",
            "bindable": true
        },
        {
            "name": "zoom",
            "type": "object",
            "defaultValue": {
                "gesture": "pinch",
                "extent": [
                    1,
                    3
                ],
                "uniform": true,
                "mouseWheel": {
                    "factor": 1.02
                },
                "doubleTap": {
                    "factor": 1.1
                }
            },
            "bindable": true
        }
    ]
});
