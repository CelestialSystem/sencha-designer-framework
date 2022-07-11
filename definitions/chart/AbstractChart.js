xds.component.Registry.addDefinition({
    override:  "Ext.chart.AbstractChart",
    typeAlias: 'abstractchart',

    disableTransform: true,

    validChildTypes: [
        'Ext.chart.axis.Axis',
        'Ext.chart.series.Series',
        'Ext.chart.Legend',
        'Ext.chart.interactions.Abstract'
    ],
    singleChildTypes: [
        'chartlegend'
    ],

    ignoreCfgs: [
        'axes', //sub-refs
        'highlightItem', //readonly
        'series' //sub-refs
    ],

    cfgs: [
        {
            name: 'interactions',
            merge: false,
            type: 'refgroup',
            refSelector: 'chartinteraction',
            createTypes: ['crosshairinteraction', 'crosszoominteraction', 'itemeditinteraction', 'itemhighlightinteraction', 'iteminfointeraction', 'panzoominteraction', 'rotateinteraction'],
            bindable: true,
            alternates: [{
                type: 'array'
            }]
        },
        {
            name: "legend",
            merge: false,
            type: 'refgroup',
            refSelector: 'chartlegend',
            createTypes: ['chartlegend'],
            max: 1,
            alternates: [{
                type: 'object'
            }]
        },
        {
            name: "store",
            merge: false,
            type: 'store',
            noneStore: '(chart-none)',
            alternates: [{
                type: 'object'
            }]
        }
    ],

    init: function() {
        var me = this;
        me.on('setup', me.onSetup, me);
    },

    onSetup: function() {
        // Set a default set of colors for use by whatever series are added. Some series
        // do not use this so they'll have to set their own colors/styles separately.
        this.setCfgValue('colors', "[\"#115fa6\", \"#94ae0a\", \"#a61120\", \"#ff8809\", \"#ffd13e\", \"#a61187\", \"#24ad9a\", \"#7c7474\", \"#a66111\"]");
    }

});
