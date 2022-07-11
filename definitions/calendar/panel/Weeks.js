xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Weeks",
    typeAlias: 'calendarweeks',

    toolbox: {
        name: 'Calendar Weeks',
        iconCls: 'icon-calendar-week',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'view',
        type: 'refgroup',
        refSelector: 'calendarviewweeks',
        createTypes: ['calendarviewweeks'],
        max: 1
    }, {
        name: 'dayHeader',
        type: 'refgroup',
        refSelector: 'calendarheaderbase',
        createTypes: ['Ext.calendar.header.Weeks'],
        max: 1,
        alternates: [{
            type: 'object'
        }]
    }],

    init: function() {
        var me = this;
        me.on('childreference', me.onChildRference, me);
    },

    onChildRference: function() {
        return 'weeks';
    }
});
