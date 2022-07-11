xds.component.Registry.addDefinition({
    override: "Ext.grid.rowedit.Plugin",
    typeAlias: 'rowedit',
    ptype: 'rowedit',
    toolbox: {
        name: 'Grid RowEdit Plugin',
        iconCls: 'icon-rowedit',
        category: ['Grid Plugins'],
        groups: ['Grids']
    },
    autoName: 'MyRowEditPlugin',
    validParentTypes: ['grid'],
    eventsFiredOnParent: [
        'beforeedit',
        'edit',
        'validateedit',
        'canceledit'
    ]
});
