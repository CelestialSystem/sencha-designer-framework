xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Scatter",

    toolbox: {
        name: 'Scatter Series',
        iconCls: 'icon-series-scatter',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyScatterSeries",

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        // Set a default marker style
        this.setCfgValue('marker', [
            "{",
            "    type: \"circle\",",
            "    radius: 5",
            "}"
        ].join('\n'));
    }
});
