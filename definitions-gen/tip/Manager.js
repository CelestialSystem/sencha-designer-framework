xds.component.Registry.addDefinition({
    "type": "Ext.tip.Manager",
    "className": "Ext.tip.Manager",
    "inherits": "Ext.Base",
    "autoName": "MyManager",
    "cfgs": [
        {
            "name": "interceptTitles",
            "type": "boolean",
            "defaultValue": false
        },
        {
            "name": "overflowTip",
            "type": "object",
            "defaultValue": {
                "align": "l-r?",
                "anchor": true,
                "showOnTap": true
            },
            "bindable": true
        }
    ]
});
