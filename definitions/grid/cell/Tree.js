xds.component.Registry.addDefinition({
    override: 'Ext.grid.cell.Tree',
    typeAlias: 'treecell',
    autoName: 'MyTreeCell',

    toolbox: {
        name: 'Tree Cell',
        iconCls: 'icon-grid-treecolumn',
        category: 'Grid Cells',
        groups: ['Grids']
    }
});
