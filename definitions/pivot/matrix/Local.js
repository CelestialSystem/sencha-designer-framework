xds.component.Registry.addDefinition({
    override: 'Ext.pivot.matrix.Local',
    typeAlias: 'pivotmatrix.local',
    autoName: 'MyLocalMatrix',

    toolbox: {
        name: 'Local matrix',
        iconCls: 'icon-pivot-local-matrix',
        category: 'Pivot grid configs',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'store',
        merge: false,
        type: 'store',
        bindable: false,
        codeValueConfigName: 'designer|userClassName'
    }]
});
