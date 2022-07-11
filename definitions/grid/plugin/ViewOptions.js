xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.ViewOptions",

    typeAlias: "gridviewoptions",
    ptype: "gridviewoptions",

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'View Options Plugin',
        iconCls: 'icon-summary-feature', // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});