xds.component.Registry.addDefinition({
    override: "Ext.list.Tree",
    typeAlias: 'treelist',

    validAsTopInstance: false, // TreeList cannot be added to canvas
    validChildTypes: [], // TreeList cannot have children

    toolbox: {
        name: 'Tree List',
        iconCls: 'icon-treeview',
        category: 'Tree / Tree Grid',
        groups: ['Trees']
    },

    autoName: 'MyTreeList',

    cfgs: [{
        name: 'store',
        merge: false,
        type: 'store',
        noneStore: '(tree-none)',
        storeSelector: 'treestore',
        codeValueConfigName: 'designer|userClassName',
        alternates: [{
            type: 'object'
        }]
    }]
});
