xds.component.Registry.addDefinition({
    override: "Ext.selection.CellModel",
    typeAlias: 'cellselectionmodel',

    toolbox: {
        name: 'Cell Selection Model',
        iconCls: 'icon-grid-cell-selection',
        category: 'Grid Selection',
        groups: ['Grids']
    },
    autoName: 'MyCellSelectionModel'
});
