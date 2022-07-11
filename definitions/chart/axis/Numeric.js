xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Numeric",
    typeAlias: 'numericaxis',

    toolbox: {
        name: 'Numeric Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: 'MyNumericAxis',

    getAxisType: function() {
        return 'numeric';
    }
});
