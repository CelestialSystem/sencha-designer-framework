xds.component.Registry.addDefinition({
    "type": "Ext.draw.modifier.Highlight",
    "className": "Ext.draw.modifier.Highlight",
    "classAlias": "modifier.highlight",
    "inherits": "Ext.draw.modifier.Modifier",
    "autoName": "MyHighlight",
    "cfgs": [
        {
            "name": "enabled",
            "type": "boolean",
            "defaultValue": false,
            "bindable": true
        },
        {
            "name": "style",
            "type": "object",
            "bindable": true
        }
    ]
});
