xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.filter.Boolean",
    typeAlias: 'booleanfilter',
    filterType: 'boolean',

    autoName: 'MyBooleanFilter',

    toolbox: {
        name: 'Boolean Filter',
        iconCls: 'icon-checkbox',
        category: 'Grid',
        groups: ['Grids', 'Trees']
    }
});
