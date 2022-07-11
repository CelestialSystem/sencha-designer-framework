xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.PagingToolbar",

    typeAlias: "gridpagingtoolbar",
    ptype: "gridpagingtoolbar",

    validParentTypes: [
        'grid'
    ],

    "mixin": [
        "Ext.mixin.Bindable"
    ],

    toolbox: {
        name: 'Paging Toolbar Plugin',
        iconCls: "icon-listpaging", // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});