xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.List",
    typeAlias: 'listfilter',
    filterType: 'list',

    autoName: 'MyListFilter',

    toolbox: {
        name: 'List Filter',
        iconCls: 'icon-list',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    }
});
