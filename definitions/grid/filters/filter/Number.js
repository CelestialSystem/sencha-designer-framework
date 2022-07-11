xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.Number",
    typeAlias: 'numberfilter',
    filterType: 'number',

    autoName: 'MyNumberFilter',

    toolbox: {
        name: 'Number Filter',
        iconCls: 'icon-numfield',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    }
});
