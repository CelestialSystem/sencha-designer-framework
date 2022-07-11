xds.component.Registry.addDefinition({
    override: 'Ext.d3.axis.Data',
    typeAlias: 'd3DataAxis',

    cfgs: [
    {
        name: 'scale',
        type: 'object',
        defaultValue: {
            type: 'linear',
            range: [
                'white',
                'maroon'
            ]
        }
    },
    {
        name: 'field',
        merge: false,
        type: 'datafield',
        storeOwnerSelector: '^pivotheatmap'
    }]
});