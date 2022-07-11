xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.RowDragDrop",
    typeAlias: 'gridrowdragdrop',
    ptype: 'gridrowdragdrop',

    toolbox: {
        name: 'Grid Row Drag Drop Plugin',
        iconCls: 'icon-dragdrop',
        category: ['Grid Plugins'],
        groups: ['Grids']
    },
    autoName: 'MyRowDragDropPlugin',
    validParentTypes: ['grid'],


    eventsFiredOnParent: [
        'beforedrop',
        'drop'
    ]
});
