xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Check',
    typeAlias: 'checkcell',
    autoName: 'MyCheckCell',

    toolbox: {
        name: 'Check Cell',
        iconCls: 'icon-grid-check',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
