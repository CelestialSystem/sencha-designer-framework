xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Separator",
    typeAlias: 'tbseparator',

    toolbox: {
        name: 'Toolbar Separator',
        iconCls: 'icon-separator',
        category: 'Toolbar',
        groups: ['Views']
    },
    transformGroup: 'tbitemspace'
});
