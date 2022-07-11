xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.RowNumberer',
    typeAlias: 'rownumberercell',
    autoName: 'MyRowNumbererCell',

    toolbox: {
        name: 'Row Numberer Cell',
        iconCls: 'icon-grid-rownumberer',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
