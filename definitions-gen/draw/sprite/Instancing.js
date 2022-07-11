xds.component.Registry.addDefinition({
    "type": "Ext.draw.sprite.Instancing",
    "className": "Ext.draw.sprite.Instancing",
    "classAlias": "sprite.instancing",
    "inherits": "Ext.draw.sprite.Sprite",
    "autoName": "MyInstancing",
    "cfgs": [
        {
            "name": "instances",
            "type": "array",
            "bindable": true
        },
        {
            "name": "template",
            "type": "object",
            "bindable": true
        }
    ]
});
