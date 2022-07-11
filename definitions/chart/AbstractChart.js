xds.component.Registry.addDefinition({
    override:  "Ext.chart.AbstractChart",
    typeAlias: ['abstractchart', 'chart'],

    disableTransform: true,

    validChildTypes: [
        'chartseries',
        'chartaxis',
        'legend',
        'Ext.chart.interactions.Abstract',
        'Ext.draw.sprite.Text',
        'Ext.toolbar.Toolbar',
        'tool'
    ],

    singleChildTypes: [
        'chartlegend'
    ],

    cfgs: [
        {
            name: "legend",
            merge: false,
            type: 'refgroup',
            refSelector: 'legend',
            createTypes: ['legend'],
            max: 1,
            alternates: [{
                type: 'object'
            }]
        },
        {
            name: "store",
            merge: true,
            type: 'store',
            noneStore: '(chart-none)',
            alternates: [{
                type: 'object'
            }]
        }
    ],

    ignoreCfgs: [
        'axes', //sub-refs
        'highlightItem', //readonly
        'interactions', //sub-refs
        'series' //sub-refs
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
