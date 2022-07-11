xds.component.Registry.addDefinition({
    "type": "Ext.draw.sprite.EllipticalArc",
    "className": "Ext.draw.sprite.EllipticalArc",
    "classAlias": "sprite.ellipticalArc",
    "inherits": "Ext.draw.sprite.Ellipse",
    "autoName": "MyEllipticalArc",
    "cfgs": [
        {
            "name": "anticlockwise",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "endAngle",
            "type": "number",
            "defaultValue": 6.283185307179586
        },
        {
            "name": "startAngle",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
