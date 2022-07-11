xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.GroupingSummary",
    typeAlias: 'groupingsummarygridfeature',

    toolbox: {
        name: 'Grouping Summary Feature',
        iconCls: 'icon-grouping-feature-summary',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MyGroupingSummaryFeature'
});
