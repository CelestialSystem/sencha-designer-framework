xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Category",
    typeAlias: 'axis.category',

    toolbox: {
        name: 'Category Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: 'MyCategoryAxis',

    getAxisType: function() {
        return 'category';
    }
});
