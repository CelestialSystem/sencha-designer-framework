xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Date',
    typeAlias: 'datecell',
    autoName: 'MyDateCell',

    toolbox: {
        name: 'Date Cell',
        iconCls: 'icon-grid-date',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
