xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Rest",
    typeAlias: 'restproxy',

    toolbox: {
        name: 'Rest Proxy',
        iconCls: 'icon-rest-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MyRestProxy'
});