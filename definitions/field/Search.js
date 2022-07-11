xds.component.Registry.addDefinition({
    override: "Ext.field.Search",
    typeAlias: "searchfield",

    "autoName": "MySearchField",
    "toolbox": {
        "name": "Search Field",
        "iconCls": "icon-searchfield",
        "category": "Form Fields",
        "groups": ['Forms','Views']
    }
});
