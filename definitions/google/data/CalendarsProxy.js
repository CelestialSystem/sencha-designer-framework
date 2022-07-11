xds.component.Registry.addDefinition({
    override: "Ext.google.data.CalendarsProxy",
    typeAlias: 'googlecalendarsproxy',

    autoName: 'MyGoogleCalendarsProxy',

    toolbox: {
        name: 'Google Calendars Proxy',
        iconCls: 'icon-ajax-proxy',
        category: 'Data Proxies',
        groups: ['Premium', 'Data']
    }
});
