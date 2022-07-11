xds.component.Registry.addDefinition({
    override: 'Ext.pivot.plugin.CellEditing',
    typeAlias: 'pivotcelleditingplugin',
    ptype: 'pivotcellediting',
    autoName: 'MyPivotCellEditing',

    toolbox: {
        name: 'Pivot Cell Editing',
        iconCls: 'icon-pivot-grid',
        category: 'Pivot grid plugins',
        groups: ['Premium']
    }
});
