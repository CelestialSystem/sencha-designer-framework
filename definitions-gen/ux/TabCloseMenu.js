xds.component.Registry.addDefinition({
    "type": "Ext.ux.TabCloseMenu",
    "className": "Ext.ux.TabCloseMenu",
    "classAlias": "plugin.tabclosemenu",
    "inherits": "Ext.plugin.Abstract",
    "mixin": [
        "Ext.util.Observable"
    ],
    "autoName": "MyTabCloseMenu",
    "cfgs": [
        {
            "name": "closeAllTabsText",
            "type": "string",
            "defaultValue": "Close All Tabs"
        },
        {
            "name": "closeOthersTabsText",
            "type": "string",
            "defaultValue": "Close Other Tabs"
        },
        {
            "name": "closeTabText",
            "type": "string",
            "defaultValue": "Close Tab"
        },
        {
            "name": "extraItemsHead",
            "type": "array"
        },
        {
            "name": "extraItemsTail",
            "type": "array"
        },
        {
            "name": "showCloseAll",
            "type": "boolean",
            "defaultValue": true
        },
        {
            "name": "showCloseOthers",
            "type": "boolean",
            "defaultValue": true
        }
    ]
});
