xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.CellEditing",
    typeAlias: 'gridcelleditingplugin',
    ptype: 'cellediting',

    toolbox: {
        name: 'Cell Editing Plugin',
        iconCls: 'icon-celledit',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Trees']
    },
    autoName: 'MyCellEditingPlugin'
});
