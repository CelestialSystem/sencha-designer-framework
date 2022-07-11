xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Server",
    typeAlias: 'serverproxy',

    mixin: ['serverproxybehavior'],

    obscureCfgs: ['cacheString', 'timeout']
});