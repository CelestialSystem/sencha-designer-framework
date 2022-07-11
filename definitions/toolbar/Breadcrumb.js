xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Breadcrumb",
    typeAlias: 'breadcrumb',

    toolbox: {
        name: 'Breadcrumb',
        iconCls: 'icon-breadcrumb',
        category: 'Toolbar',
        groups: ['Views']
    },

    cfgs: [
        {
            name: 'store',
            merge: false,
            type: 'store',
            noneStore: '(tree-none)',
            storeSelector: 'treestore',
            codeValueConfigName: 'designer|userClassName'
        }
    ]
});
