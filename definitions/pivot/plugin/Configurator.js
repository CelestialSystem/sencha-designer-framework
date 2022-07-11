xds.component.Registry.addDefinition({
    override: 'Ext.pivot.plugin.Configurator',
    typeAlias: 'pivotconfiguratorplugin',
    ptype: 'pivotconfigurator',
    autoName: 'MyPivotConfigurator',

    toolbox: {
        name: 'Pivot Configurator',
        iconCls: 'icon-pivot-configurator',
        category: 'Pivot grid plugins',
        groups: ['Premium']
    }
});
