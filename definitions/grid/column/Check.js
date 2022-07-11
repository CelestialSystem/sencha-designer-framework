xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Check",
    typeAlias: 'checkcolumn',

    toolbox: {
        name: 'Check Column',
        iconCls: 'icon-grid-check',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    }
});
