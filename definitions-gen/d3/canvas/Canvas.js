xds.component.Registry.addDefinition({
    "type": "Ext.d3.canvas.Canvas",
    "className": "Ext.d3.canvas.Canvas",
    "classAlias": "widget.d3-canvas",
    "inherits": "Ext.d3.Component",
    "autoName": "MyCanvas",
    "cfgs": [
        {
            "name": "hdpi",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "size",
            "type": "object",
            "bindable": true
        }
    ],
    "eventDefs": [
        {
            "name": "sceneresize",
            "params": [
                {
                    "name": "component",
                    "type": "Ext.d3.canvas.Canvas",
                    "optional": true
                },
                {
                    "name": "canvas",
                    "type": "HTMLCanvasElement",
                    "optional": true
                },
                {
                    "name": "size",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "eOpts",
                    "type": "Object",
                    "optional": true
                }
            ]
        }
    ]
});
