xds.component.Registry.addDefinition({
    override: "Ext.grid.filters.Plugin",

    typeAlias: "gridfilters",
    ptype: 'gridfilters',

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Filter',
        iconCls: 'icon-celledit',
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});
