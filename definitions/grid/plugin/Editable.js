xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Editable",

    typeAlias: "grideditable",
    ptype: "grideditable",

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Editable Plugin',
        iconCls: 'icon-rowedit', // TODO: need actual icon
        category: ['Grid Plugins'],
        groups: ["Grids", "Extensions"]
    }
});