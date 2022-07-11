xds.component.Registry.addDefinition({
    "type": "Ext.draw.sprite.Sprite",
    "className": "Ext.draw.sprite.Sprite",
    "classAlias": "sprite.sprite",
    "inherits": "Ext.Base",
    "mixin": [
        "Ext.mixin.Observable"
    ],
    "autoName": "MySprite",
    "cfgs": [
        {
            "name": "animation",
            "type": "object",
            "bindable": true
        },
        {
            "name": "fillOpacity",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "fillStyle",
            "type": "string",
            "defaultValue": "none"
        },
        {
            "name": "globalAlpha",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "globalCompositeOperation",
            "type": "string",
            "defaultValue": "source-over"
        },
        {
            "name": "hidden",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "lineCap",
            "type": "string",
            "defaultValue": "butt"
        },
        {
            "name": "lineDash",
            "type": "array",
            "defaultValue": []
        },
        {
            "name": "lineDashOffset",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "lineJoin",
            "type": "string",
            "defaultValue": "miter"
        },
        {
            "name": "lineWidth",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "miterLimit",
            "type": "number",
            "defaultValue": 10
        },
        {
            "name": "rotation",
            "type": "number",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "rotationCenterX",
            "type": "number"
        },
        {
            "name": "rotationCenterY",
            "type": "number"
        },
        {
            "name": "rotationRads",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "scaling",
            "type": "number",
            "alternates": [
                {
                    "type": "object"
                }
            ]
        },
        {
            "name": "scalingCenterX",
            "type": "number"
        },
        {
            "name": "scalingCenterY",
            "type": "number"
        },
        {
            "name": "scalingX",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "scalingY",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "shadowBlur",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "shadowColor",
            "type": "string",
            "defaultValue": "none"
        },
        {
            "name": "shadowOffsetX",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "shadowOffsetY",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "strokeOpacity",
            "type": "number",
            "defaultValue": 1
        },
        {
            "name": "strokeStyle",
            "type": "string",
            "defaultValue": "none"
        },
        {
            "name": "transformFillStroke",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "translation",
            "type": "object"
        },
        {
            "name": "translationX",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "translationY",
            "type": "number",
            "defaultValue": 0
        },
        {
            "name": "zIndex",
            "type": "number",
            "defaultValue": 0
        }
    ]
});
