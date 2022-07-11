xds.component.Registry.addDefinition({
    override: "Ext.tree.plugin.TreeViewDragDrop",
    typeAlias: 'treedragdropplugin',
    mixin: ['observable'],
    ptype: 'treeviewdragdrop',

    toolbox: {
        name: 'Tree Drag Drop Plugin',
        iconCls: 'icon-dragdrop',
        category: 'Tree / Tree Grid',
        groups: ['Views', 'Trees']
    },
    autoName: 'MyTreeDragDropPlugin',
    validParentTypes: ['treeview'],

    basicCfgs: ['appendOnly', 'enableDrag', 'enableDrop', 'ddGroup', 'allowContainerDrop', 'allowParentInsert'],

    eventsFiredOnParent: [
        'beforedrop',
        'drop'
    ]
});
