xds.component.Registry.addDefinition({
    override: "Ext.google.data.EventsProxy",
    typeAlias: 'googleeventsproxy',

    autoName: 'MyGoogleEventsProxy',

    toolbox: {
        name: 'Google Events Proxy',
        iconCls: 'icon-ajax-proxy',
        category: 'Data Proxies',
        groups: ['Premium', 'Data']
    }
});
