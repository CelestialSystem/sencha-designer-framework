xds.component.Registry.addDefinition({
    "type": "Ext.draw.sprite.Tick",
    "className": "Ext.draw.sprite.Tick",
    "classAlias": "sprite.tick",
    "inherits": "Ext.draw.sprite.Line",
    "autoName": "MyTick",
    "cfgs": [
        {
            "name": "size",
            "type": "number",
            "defaultValue": 4
        },
        {
            "name": "x",
            "type": "object",
            "defaultValue": "number"
        },
        {
            "name": "y",
            "type": "object",
            "defaultValue": "number"
        }
    ]
});
