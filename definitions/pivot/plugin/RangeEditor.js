xds.component.Registry.addDefinition({
    override: 'Ext.pivot.plugin.RangeEditor',
    typeAlias: 'pivotrangeeditorplugin',
    ptype: 'pivotrangeeditor',
    autoName: 'MyPivotRangeEditor',

    toolbox: {
        name: 'Pivot Range Editor',
        iconCls: 'icon-pivot-range-editor',
        category: 'Pivot grid plugins',
        groups: ['Premium']
    }
});
