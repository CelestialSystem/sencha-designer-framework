xds.component.Registry.addDefinition({
    override: "Ext.selection.RowModel",
    typeAlias: 'rowselectionmodel',

    toolbox: {
        name: 'Row Selection Model',
        iconCls: 'icon-grid-row-selection',
        category: 'Grid Selection',
        groups: ['Grids']
    },
    autoName: 'MyRowSelectionModel'
});
