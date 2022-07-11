xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Memory",
    typeAlias: 'memoryproxy',

    toolbox: {
        name: 'Memory Proxy',
        iconCls: 'icon-memory-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MyMemoryProxy'

});