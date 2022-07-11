xds.component.Registry.addDefinition({
    override: 'Ext.pivot.d3.TreeMap',
    typeAlias: ['pivottreemap'],

    toolbox: {
        name: 'Pivot D3 Tree Map',
        iconCls: 'icon-pivot-d3-tree-map',
        category: 'Pivot D3',
        groups: ['Premium']
    },

    validParentTypes: ['pivotd3container', 'Ext.Component'],

    validChildTypes: ['pivotmatrix.local', 'pivotmatrix.remote'],

    cfgs: [{
        name: 'matrix',
        type: 'refgroup',
        merge: false,
        refSelector: 'pivotmatrix.base',
        createTypes: ['pivotmatrix.local', 'pivotmatrix.remote']
    }],

    init: function() {
        var me = this;
        me.on({
            create: me.onCreate,
            scope: me
        });
    },

    onCreate: function() {
        var me = this;
        if (me.parent().isType('pivotd3container')) {
            me.setReference({name: 'drawing', type: 'object'});
        }
    }
});
