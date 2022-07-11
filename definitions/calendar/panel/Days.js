xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Days",
    typeAlias: 'calendardays',

    toolbox: {
        name: 'Calendar Days',
        iconCls: 'icon-calendar-day',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'view',
        type: 'refgroup',
        refSelector: 'calendarviewdays',
        createTypes: ['calendarviewdays'],
        max: 1
    }, {
        name: 'dayHeader',
        type: 'refgroup',
        refSelector: 'calendarheaderbase',
        createTypes: ['Ext.calendar.header.Days'],
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
        return 'days';
    }
});
