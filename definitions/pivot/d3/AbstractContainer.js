xds.component.Registry.addDefinition({
    override: 'Ext.pivot.d3.AbstractContainer',
    typeAlias: ['pivotd3abstractcontainer'],

    cfgs: [{
        name: 'matrix',
        type: 'refgroup',
        merge: false,
        refSelector: 'pivotmatrix.base',
        createTypes: ['pivotmatrix.local', 'pivotmatrix.remote']
    }, {
        name: 'configurator',
        displayName: 'Configurator',
        type: 'refgroup',
        merge: false,
        refSelector: 'pivotd3configurator',
        createTypes: ['pivotd3configurator']
    }, {
        name: 'drawing',
        type: 'refgroup',
        merge: false,
        refSelector: 'component',
        createTypes: ['pivotheatmap', 'pivottreemap']
    }]
});
