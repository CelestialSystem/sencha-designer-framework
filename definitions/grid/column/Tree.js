xds.component.Registry.addDefinition({
    override: "Ext.grid.column.Tree",
    typeAlias: 'treecolumn',

    toolbox: {
        name: 'Tree Column',
        iconCls: 'icon-treecolumn',
        category: 'Grid Columns',
        groups: ['Grids']
    },
    autoName: 'MyTreeColumn',
    validParentTypes: ['tree']
});
