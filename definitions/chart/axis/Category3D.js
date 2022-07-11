xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Category3D",
    typeAlias: 'axis.category3d',

    toolbox: {
        name: '3D Category Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: 'My3DCategoryAxis',

    getAxisType: function() {
        return 'category3d';
    }
});
