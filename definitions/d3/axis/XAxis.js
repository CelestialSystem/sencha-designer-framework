xds.component.Registry.addDefinition({
    type: 'Ext.d3.axis.Data.X',
    inherits: 'Ext.d3.axis.Data',
    typeAlias: 'd3XAxis',
    autoName: 'MyXAxis',

    toolbox: {
        iconCls: 'icon-axis',
    },

    init: function() {
        var me = this;
        me.setReference({ name: 'xAxis', type: 'object' });
    }
});