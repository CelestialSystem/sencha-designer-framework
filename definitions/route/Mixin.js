xds.component.Registry.addDefinition({
    override: "Ext.route.Mixin",

    cfgs: [{
        name: 'routes',
        merge: false,
        displayName: 'Routes',
        type: 'refgroup',
        bindable: true,
        refSelector: 'controllerroute',
        createTypes: ['controllerroute']
    }]
});
