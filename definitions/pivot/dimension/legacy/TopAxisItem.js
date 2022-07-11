xds.component.Registry.addDefinition({
    type: 'Ext.pivot.dimension.legacy.TopAxisItem',
    inherits: 'Ext.pivot.dimension.Item',
    typeAlias: 'pivotdimension.topaxisitem',
    autoName: 'MyTopaxisItem',

    toolbox: {
        name: 'Top axis item',
        iconCls: 'icon-pivot-top-axis-item',
        category: 'Pivot grid configs',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'filter',
        type: 'refgroup',
        merge: false,
        max: 1,
        refSelector: '[inherits="Ext.pivot.filter.Base"]',
        createTypes: ['pivotfilter.label', 'pivotfilter.value']
    }],

    init: function() {
        var me = this;

        me.setReference({name: 'topAxis', type: 'array'});
    }
});
