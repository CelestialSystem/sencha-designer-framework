xds.component.Registry.addDefinition({
    override: "Ext.grid.feature.AdvancedGroupingSummary",
    typeAlias: 'advancedgroupingsummaryfeatureplugin',
    ftype: 'advancedgroupingsummaryfeature',

    toolbox: {
        name: 'Advanced Grouping Summary Feature',
        iconCls: 'icon-grouping-feature',
        category: 'Grid Features',
        groups: ['Grids']
    },
    autoName: 'MyAdvancedGroupingSummary',
});
