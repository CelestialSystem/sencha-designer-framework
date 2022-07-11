xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.Summary",
    typeAlias: 'summarygridfeature',

    toolbox: {
        name: 'Summary Feature',
        iconCls: 'icon-summary-feature',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MySummaryFeature',

    cfgs: [
        {
            name: "dock",
            merge: true,
            editor: 'options',
            options: ['bottom', 'top']
        }
    ]
});
