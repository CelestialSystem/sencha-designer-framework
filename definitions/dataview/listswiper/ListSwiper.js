xds.component.Registry.addDefinition({
    override: "Ext.dataview.listswiper.ListSwiper",
    typeAlias: "listswiper",
    ptype: "listswiper",

    "autoName": "MyListSwiperPlugin",
    "toolbox": {
        "name": "List Swiper Plugin",
        "iconCls": "icon-listpaging", // TODO: list swiper icon
        "category": "Views",
        "groups": ["Views"]
    },

    "validParentTypes": ["list"],
    "validChildTypes": []
});
