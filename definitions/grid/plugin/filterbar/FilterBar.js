xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.filterbar.FilterBar",
    typeAlias: 'gridfilterbarplugin',
    ptype: 'gridfilterbar',
    
    autoName: 'MyGridFilterBar',
    
    toolbox: {
        name: 'Grid Filter Bar Plugin',
        iconCls: 'icon-filter',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },
});
