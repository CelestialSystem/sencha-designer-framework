xds.component.Registry.addDefinition({
    override: "Ext.toolbar.Fill",
    typeAlias: 'tbfill',

    toolbox: {
        name: 'Fill',
        iconCls: 'icon-fill',
        category: 'Toolbar',
        groups: ['Views']
    },
    validParentTypes: ['toolbar'],
    transformGroup: 'tbitemspace',
    fullscreenAtTopLevel: false
});
