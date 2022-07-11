xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.BufferedRenderer",
    ptype: 'bufferedrenderer',

    validParentTypes: ['tablepanel'],

    toolbox: {
        name: 'Buffered Renderer Plugin',
        iconCls: 'icon-grid-bufferedrenderer',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    }
});
