xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Ajax",
    typeAlias: 'ajaxproxy',

    mixin: ['ajaxproxybehavior'],

    toolbox: {
        name: 'Ajax Proxy',
        iconCls: 'icon-ajax-proxy',
        category: 'Data Proxies',
        groups: ['Data','Models']
    },
    autoName: 'MyAjaxProxy'

});