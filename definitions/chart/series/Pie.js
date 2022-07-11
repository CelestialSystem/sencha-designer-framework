xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Pie",
    typeAlias: 'pieseries',

    toolbox: {
        name: 'Pie Series',
        iconCls: 'icon-series-pie',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: 'MyPieSeries',

    cfgs: [
        {
            name: "radiusField",
            merge: true,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ],
    init: function() {
        var me = this;
        me.on('coderequires', me.onCodeRequires, me);
    },

    onCodeRequires: function() {
        // required so builds work.
        return ['Ext.chart.series.sprite.PieSlice'];
    }
});
