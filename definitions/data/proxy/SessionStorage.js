xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.SessionStorage",
    typeAlias: 'sessionstorageproxy',

    toolbox: {
        name: 'SessionStorage Proxy',
        iconCls: 'icon-sessionstorage-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MySessionStorageProxy'
});