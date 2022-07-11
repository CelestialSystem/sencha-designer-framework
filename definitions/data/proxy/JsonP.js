xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.JsonP",
    typeAlias: 'jsonpproxy',

    toolbox: {
        name: 'JsonP Proxy',
        iconCls: 'icon-jsonp-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MyJsonPProxy'
});