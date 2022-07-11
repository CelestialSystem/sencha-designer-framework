xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Date",
    typeAlias: 'datecolumn',

    toolbox: {
        name: 'Date Column',
        iconCls: 'icon-grid-date',
        category: 'Grid Columns',
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyDateColumn',

    basicCfgs: ['format']
});
