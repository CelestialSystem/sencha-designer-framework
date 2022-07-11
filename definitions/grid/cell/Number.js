xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Number',
    typeAlias: 'numbercell',
    autoName: 'MyNumberCell',

    toolbox: {
        name: 'Number Cell',
        iconCls: 'icon-grid-num',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
