xds.component.Registry.addDefinition({
    override: 'Ext.pivot.matrix.Remote',
    typeAlias: 'pivotmatrix.remote',
    autoName: 'MyRemoteMatrix',

    toolbox: {
        name: 'Remote matrix',
        iconCls: 'icon-pivot-remote-matrix',
        category: 'Pivot grid configs',
        groups: ['Premium']
    }
});
