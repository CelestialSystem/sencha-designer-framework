xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Numeric3D",
    typeAlias: 'numeric3d',

    toolbox: {
        name: '3D Numeric Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: 'My3DNumericAxis',

    getAxisType: function() {
        return 'numeric3d';
    }
});
