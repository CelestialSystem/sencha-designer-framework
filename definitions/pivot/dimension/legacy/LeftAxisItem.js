xds.component.Registry.addDefinition({
    type: 'Ext.pivot.dimension.legacy.LeftAxisItem',
    inherits: 'Ext.pivot.dimension.Item',
    typeAlias: 'pivotdimension.leftaxisitem',
    autoName: 'MyLeftaxisItem',

    toolbox: {
        name: 'Left axis item',
        iconCls: 'icon-pivot-left-axis-item',
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

        me.setReference({name: 'leftAxis', type: 'array'});
    }
});
