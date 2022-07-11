xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Week",
    typeAlias: 'calendarweek',

    toolbox: {
        name: 'Calendar Week',
        iconCls: 'icon-calendar-week',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'view',
        type: 'refgroup',
        refSelector: 'calendarviewweek',
        createTypes: ['calendarviewweek'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on('childreference', me.onChildRference, me);
    },

    onChildRference: function() {
        return 'week';
    }
});
