xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Anchor",
    "className": "Ext.layout.container.Anchor",
    "classAlias": "layout.anchor",
    "inherits": "Ext.layout.container.Auto",
    "autoName": "MyAnchor",
    "typeAlias": [
        "Ext.layout.AnchorLayout"
    ],
    "cfgs": [
        {
            "name": "anchor",
            "type": "string"
        },
        {
            "name": "defaultAnchor",
            "type": "string",
            "defaultValue": "100%"
        }
    ]
});
