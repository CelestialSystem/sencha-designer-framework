xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.GroupingPanel",
    typeAlias: 'groupingpanelplugin',
    ptype: 'groupingpanel',

    toolbox: {
        name: 'Grouping Panel',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ['Grids']
    },

    autoName: 'MyGroupingPanel',

    validParentTypes: ['gridpanel'],
});
