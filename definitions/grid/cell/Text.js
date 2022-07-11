xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Text',
    typeAlias: 'textcell',
    autoName: 'MyTextCell',

    toolbox: {
        name: 'Text Cell',
        iconCls: 'icon-grid-column',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
