xds.component.Registry.addDefinition({
    override: 'Ext.pivot.d3.HeatMap',
    typeAlias: ['pivotheatmap'],

    toolbox: {
        name: 'Pivot D3 Heat Map',
        iconCls: 'icon-pivot-d3-heat-map',
        category: 'Pivot D3',
        groups: ['Premium']
    },

    validParentTypes: ['pivotd3container', 'Ext.Component'],

    validChildTypes: ['pivotmatrix.local', 'pivotmatrix.remote', 'Ext.d3.axis.Color', 'Ext.d3.axis.Data.X', 'Ext.d3.axis.Data.Y'],

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
