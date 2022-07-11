xds.component.Registry.addDefinition({
    override: 'Ext.calendar.store.Events',
    typeAlias: 'calendarevents',

    toolbox: {
        name: 'Calendar Events Store',
        iconCls: 'icon-store',
        category: 'Data Stores',
        groups: ['Data', 'Premium']
    },

    cfgs: [{
        name: 'calendar',
        merge: false,
        type: 'model'
    }, {
        name: 'prefetchMode',
        merge: true,
        editor: 'options',
        options: ['month', 'week', 'day']
    }]
});
