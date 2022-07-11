xds.component.Registry.addDefinition({
    override: 'Ext.d3.Component',
    typeAlias: 'd3-component',

    validParentTypes: ['container'],

    cfgs: [{
        name: 'store',
        merge: true,
        type: 'store'
    }]
});