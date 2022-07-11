xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Exporter",
    typeAlias: 'gridexporterplugin',
    ptype: 'gridexporter',

    toolbox: {
        name: 'Grid Exporter',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ['Grids', 'Premium']
    },

    autoName: 'MyGridExporterPlugin'
});
