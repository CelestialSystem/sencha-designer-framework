xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Day",
    typeAlias: 'calendarday',

    toolbox: {
        name: 'Calendar Day',
        iconCls: 'icon-calendar-day',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'view',
        type: 'refgroup',
        refSelector: 'calendarviewday',
        createTypes: ['calendarviewday'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on('childreference', me.onChildRference, me);
    },

    onChildRference: function() {
        return 'day';
    }
});
