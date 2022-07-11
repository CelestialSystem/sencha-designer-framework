xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Summaries",
    typeAlias: 'gridsummariesplugin',
    ptype: 'gridsummaries',
    autoName: "MyGridSummaries",
    validParentTypes: ['treegroupedgrid'],

    toolbox: {
        name: 'Grid Summaries',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },
});
