xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Card",
    "className": "Ext.layout.container.Card",
    "classAlias": "layout.card",
    "inherits": "Ext.layout.container.Fit",
    "autoName": "MyCard",
    "typeAlias": [
        "Ext.layout.CardLayout"
    ],
    "cfgs": [
        {
            "name": "deferredRender",
            "type": "boolean",
            "defaultValue": false
        }
    ]
});
