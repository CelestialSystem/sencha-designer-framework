xds.component.Registry.addDefinition({
    "type": "Ext.ux.TabScrollerMenu",
    "className": "Ext.ux.TabScrollerMenu",
    "classAlias": "plugin.tabscrollermenu",
    "inherits": "Ext.Base",
    "autoName": "MyTabScrollerMenu",
    "cfgs": [
        {
            "name": "maxText",
            "type": "number",
            "defaultValue": 15
        },
        {
            "name": "menuPrefixText",
            "type": "string",
            "defaultValue": "Items"
        },
        {
            "name": "pageSize",
            "type": "number",
            "defaultValue": 10
        }
    ]
});
