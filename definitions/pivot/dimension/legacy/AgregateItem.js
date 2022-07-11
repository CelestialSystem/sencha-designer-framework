xds.component.Registry.addDefinition({
    type: 'Ext.pivot.dimension.legacy.AggregateItem',
    inherits: 'Ext.pivot.dimension.Item',
    typeAlias: 'pivotdimension.aggregateitem',
    autoName: 'MyAggregateItem',

    validParentTypes: ['Ext.Base'],

    toolbox: {
        name: 'Aggregate item',
        iconCls: 'icon-pivot-aggregate-item',
        category: 'Pivot grid configs',
        groups: ['Premium']
    },

    ignoreCfgs: ['filter'],

    init: function() {
        var me = this;

        me.setReference({name: 'aggregate', type: 'object'});
    }
});
