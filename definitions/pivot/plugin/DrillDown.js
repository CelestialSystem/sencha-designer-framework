xds.component.Registry.addDefinition({
    override: 'Ext.pivot.plugin.DrillDown',
    typeAlias: 'pivotdrilldownplugin',
    ptype: 'pivotdrilldown',
    autoName: 'MyPivotDrillDown',

    toolbox: {
        name: 'Pivot Drill Down',
        iconCls: 'icon-pivot-drill-down',
        category: 'Pivot grid plugins',
        groups: ['Premium']
    }
});
