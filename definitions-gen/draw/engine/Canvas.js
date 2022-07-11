xds.component.Registry.addDefinition({
    "type": "Ext.draw.engine.Canvas",
    "className": "Ext.draw.engine.Canvas",
    "inherits": "Ext.draw.Surface",
    "autoName": "MyCanvas",
    "cfgs": [
        {
            "name": "highPrecision",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "precisionOverrides",
            "type": "object"
        }
    ]
});
