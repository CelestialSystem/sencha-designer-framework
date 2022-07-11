xds.component.Registry.addDefinition({
    type: 'Ext.d3.axis.Data.Y',
    inherits: 'Ext.d3.axis.Data',
    typeAlias: 'd3YAxis',
    autoName: 'MyYAxis',

    toolbox: {
        iconCls: 'icon-axis',
    },

    init: function() {
        var me = this;
        me.setReference({ name: 'yAxis', type: 'object' });
    }
});