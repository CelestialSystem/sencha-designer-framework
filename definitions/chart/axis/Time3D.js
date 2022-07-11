xds.component.Registry.addDefinition({
    override: "Ext.chart.axis.Time3D",
    typeAlias: 'time3d',

    toolbox: {
        name: '3D Time Axis',
        iconCls: 'icon-axis',
        category: 'Chart Axes',
        groups: ['Charts']
    },
    autoName: 'MyTime3DAxis',

    getAxisType: function() {
        return 'time';
    },

    init: function() {
        var me = this;
        me.on({
            setup: me.onSetup,
            scope: me
        });
    },

    onSetup: function() {
        var me = this;

        // Set a default 'fields' value that's reasonably likely to line up with a date field in the data store
        if (!me.isCfgSet('fields')) {
            me.setCfgValue('fields', ['date']);
        }

        // Give a default dateFormat
        if (!me.isCfgSet('dateFormat')) {
            me.setCfgValue('dateFormat', 'm/d');
        }
    }
});
