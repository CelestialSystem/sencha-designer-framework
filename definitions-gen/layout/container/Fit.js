xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Fit",
    "className": "Ext.layout.container.Fit",
    "classAlias": "layout.fit",
    "inherits": "Ext.layout.container.Container",
    "autoName": "MyFit",
    "typeAlias": [
        "Ext.layout.FitLayout",
        "Ext.layout.Fit"
    ],
    "cfgs": [
        {
            "name": "itemCls",
            "type": "string",
            "defaultValue": "x-fit-item"
        }
    ]
});
