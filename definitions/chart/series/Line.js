xds.component.Registry.addDefinition({
    override: "Ext.chart.series.Line",

    toolbox: {
        name: 'Line Series',
        iconCls: 'icon-series-line',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyLineSeries",

    ignoreCfgs: [
        'smooth' // this doesn't actually work as a config, it must be set within the 'style' object config.
    ],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue({
            style: [
                "{",
                "    smooth: false,",
                "    stroke: '#000'",
                "}"
            ].join('\n'),
            colors: ['rgba(0,0,0,0.1)']
        });
    }

});
