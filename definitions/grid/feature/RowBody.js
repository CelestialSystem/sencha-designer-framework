xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.RowBody",
    typeAlias: 'rowbodygridfeature',

    toolbox: {
        name: 'Row Body Feature',
        iconCls: 'icon-rowbody-feature',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MyRowBodyFeature',
    basicCfgs: ['getAdditionalData'],

    cfgs: [{
        name: 'getAdditionalData',
        type: 'function',
        params: [
            {
                "name": "data",
                "type": "Object"
            },
            {
                "name": "idx",
                "type": "Number"
            },
            {
                "name": "record",
                "type": "Ext.data.Model"
            },
            {
                "name": "orig",
                "type": "Object"
            }
        ]
    }]
});
