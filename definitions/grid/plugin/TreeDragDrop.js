xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.TreeDragDrop",
    typeAlias: 'treedragdrop',
    ptype: 'treedragdrop',

    toolbox: {
        name: 'Tree Drag Drop Plugin',
        iconCls: 'icon-dragdrop',
        category: 'Tree / Tree Grid',
        groups: ['Trees']
    },
    autoName: 'MyTreeDragDropPlugin',
    validParentTypes: [
        'grid'
    ],

    eventsFiredOnParent: [
        'beforedrop',
        'drop'
    ]
});
