xds.component.Registry.addDefinition({
    override: "Ext.calendar.panel.Month",
    typeAlias: 'calendarmonth',

    toolbox: {
        name: 'Calendar Month',
        iconCls: 'icon-calendar-month',
        category: 'Calendar',
        groups: ['Premium']
    },

    cfgs: [{
        name: 'view',
        type: 'refgroup',
        refSelector: 'calendarviewmonth',
        createTypes: ['calendarviewmonth'],
        max: 1
    }],

    init: function() {
        var me = this;
        me.on('childreference', me.onChildRference, me);
    },

    onChildRference: function() {
        return 'month';
    }
});
