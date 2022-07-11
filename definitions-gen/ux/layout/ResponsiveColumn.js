xds.component.Registry.addDefinition({
    "type": "Ext.ux.layout.ResponsiveColumn",
    "className": "Ext.ux.layout.ResponsiveColumn",
    "classAlias": "layout.responsivecolumn",
    "inherits": "Ext.layout.container.Auto",
    "autoName": "MyResponsiveColumn",
    "cfgs": [
        {
            "name": "states",
            "type": "object",
            "defaultValue": {
                "small": 1000,
                "large": 0
            }
        }
    ]
});
