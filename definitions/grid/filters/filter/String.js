xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.String",
    typeAlias: 'stringfilter',
    filterType: 'string',

    autoName: 'MyStringFilter',

    toolbox: {
        name: 'String Filter',
        iconCls: 'icon-filter',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    }
});
