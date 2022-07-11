xds.component.Registry.addDefinition({
    override: "Ext.data.proxy.WebStorage",
    typeAlias: 'webstorageproxy',

    // WebStorage proxies don't allow readers or writers
    validChildTypes: ['!basiceventbinding']
});