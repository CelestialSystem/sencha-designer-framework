xds.component.Registry.addDefinition({
    "type": "Ext.dataview.listswiper.ListSwiper",
    "className": "Ext.dataview.listswiper.ListSwiper",
    "classAlias": "plugin.listswiper",
    "inherits": "Ext.plugin.Abstract",
    "autoName": "MyListSwiper",
    "cfgs": [
        {
            "name": "commitDelay",
            "type": "number",
            "defaultValue": 0,
            "bindable": true
        },
        {
            "name": "dismissOnScroll",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "dismissOnTap",
            "type": "boolean",
            "defaultValue": true,
            "bindable": true
        },
        {
            "name": "target",
            "type": "string",
            "editor": "options",
            "options": [
                "inner",
                "outer"
            ],
            "defaultValue": "inner",
            "bindable": true
        },
        {
            "name": "widget",
            "type": "object",
            "defaultValue": {
                "xtype": "listswiperaccordion"
            },
            "bindable": true
        }
    ]
});
