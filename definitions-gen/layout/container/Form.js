xds.component.Registry.addDefinition({
    "type": "Ext.layout.container.Form",
    "className": "Ext.layout.container.Form",
    "classAlias": "layout.form",
    "inherits": "Ext.layout.container.Auto",
    "autoName": "MyForm",
    "typeAlias": [
        "Ext.layout.FormLayout"
    ],
    "cfgs": [
        {
            "name": "itemSpacing",
            "type": "number"
        },
        {
            "name": "labelWidth",
            "type": "auto"
        }
    ]
});
