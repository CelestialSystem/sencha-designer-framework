xds.component.Registry.addDefinition({
    override: 'Ext.calendar.view.Base',

    cfgs: [{
        name: 'store',
        merge: false,
        type: 'store',
        noneStore: '(calendars-none)',
        storeSelector: 'calendars',
        codeValueConfigName: 'designer|userClassName'
    }]
});
