xds.component.Registry.addDefinition({
    "type": "Ext.draw.sprite.Arc",
    "className": "Ext.draw.sprite.Arc",
    "classAlias": "sprite.arc",
    "inherits": "Ext.draw.sprite.Circle",
    "autoName": "MyArc",
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
