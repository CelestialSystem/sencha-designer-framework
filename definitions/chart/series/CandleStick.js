xds.component.Registry.addDefinition({
    override: "Ext.chart.series.CandleStick",

    toolbox: {
        name: 'Candlestick Series',
        iconCls: 'icon-series-candlestick',
        category: 'Chart Series',
        groups: ['Charts']
    },
    autoName: "MyCandleStickSeries",

    cfgs: [
        {
            name: "closeField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        },
        {
            name: "highField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        },
        {
            name: "lowField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        },
        {
            name: "openField",
            merge: false,
            type: "datafield",
            storeOwnerSelector: '^abstractchart'
        }
    ],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        this.setCfgValue('style', [
            "{",
            "    barWidth: 7,",
            "    dropStyle: {",
            "        fill: 'rgb(237,123,43)',",
            "        stroke: 'rgb(237,123,43)'",
            "    },",
            "    raiseStyle: {",
            "        fill: 'rgb(55,153,19)',",
            "        stroke: 'rgb(55,153,19)'",
            "    }",
            "}"
        ].join('\n'));
    }
});
