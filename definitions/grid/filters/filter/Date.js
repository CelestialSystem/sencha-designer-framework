xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.Date",
    typeAlias: 'datefilter',
    filterType: 'date',

    autoName: 'MyDateFilter',

    toolbox: {
        name: 'Date Filter',
        iconCls: 'icon-datefield',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    }
});
