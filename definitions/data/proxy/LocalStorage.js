xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.LocalStorage",
    typeAlias: 'localstorageproxy',

    toolbox: {
        name: 'LocalStorage Proxy',
        iconCls: 'icon-localStorage-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MyLocalStorageProxy'
});