xds.component.Registry.addDefinition({
    override: 'Ext.pivot.plugin.Exporter',
    typeAlias: 'pivotexporterplugin',
    ptype: 'pivotexporter',
    autoName: 'MyPivotExporter',

    toolbox: {
        name: 'Pivot Exporter',
        iconCls: 'icon-pivot-exporter',
        category: 'Pivot grid plugins',
        groups: ['Premium']
    }
});
