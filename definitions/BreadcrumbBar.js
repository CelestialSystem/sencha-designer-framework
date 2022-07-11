xds.component.Registry.addDefinition({
    override: "Ext.BreadcrumbBar",
    typeAlias: 'breadcrumbbar',

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
