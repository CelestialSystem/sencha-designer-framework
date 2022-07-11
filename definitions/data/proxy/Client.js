xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.Client",
    typeAlias: 'clientproxy',

    ignoreCfgs: ['eventsRefGroup'],

    // disallow event bindings
    validChildTypes: ['!basiceventbinding', 'reader', 'writer']
});