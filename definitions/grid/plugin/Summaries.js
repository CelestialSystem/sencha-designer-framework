xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Summaries",
    typeAlias: 'gridsummariesplugin',
    ptype: 'gridsummaries',
    autoName: "MyGridSummaries",

    toolbox: {
        name: 'Grid Summaries',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },
});
