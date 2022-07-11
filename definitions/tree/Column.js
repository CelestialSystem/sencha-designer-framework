xds.component.Registry.addDefinition({
    override: "Ext.tree.Column",
    typeAlias: 'treecolumn',

    toolbox: {
        name: 'Tree Column',
        iconCls: 'icon-treecolumn',
        category: 'Tree / Tree Grid',
        groups: ['Views', 'Trees']
    },
    autoName: 'MyTreeColumn',
    transformGroup: null,
    disableDuplication: true,
    validParentTypes: ['treepanel']
});
