xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.CellEditing",

    typeAlias: "gridcellediting",
    ptype: 'gridcellediting',

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Cell Editing Plugin',
        iconCls: 'icon-celledit',
        category: ['Grid Plugins'],
        groups: ["Grids"]
    }
});
