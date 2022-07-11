xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.RowOperations",

	typeAlias: "rowoperations",
	ptype: "rowoperations",

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Row Operations Plugin',
        iconCls: 'icon-rowedit', // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});