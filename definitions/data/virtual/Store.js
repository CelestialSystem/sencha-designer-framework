xds.component.Registry.addDefinition({
    override: 'Ext.data.virtual.Store',
    typeAlias: 'virtualstore',
    toolbox: {
        name: 'Virtual Store',
        category: 'Data Stores',
        groups: ['Data'],
        iconCls: 'icon-store'
    },
    autoName: 'MyVirtualStore'
});
