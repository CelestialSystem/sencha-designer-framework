xds.component.Registry.addDefinition({
    override: 'Ext.calendar.store.EventSource',
    typeAlias: 'calendareventsource',

    toolbox: {
        name: 'Calendar Event Source Store',
        iconCls: 'icon-store',
        category: 'Data Stores',
        groups: ['Data', 'Premium']
    },

    cfgs: [{
        name: 'source',
        merge: true,
        type: 'store'
    }]
});
