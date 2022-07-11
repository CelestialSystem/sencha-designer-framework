xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Boolean',
    typeAlias: 'booleancell',
    autoName: 'MyBooleanCell',

    toolbox: {
        name: 'Boolean Cell',
        iconCls: 'icon-grid-bool',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
