xds.component.Registry.addDefinition({
    override: "Ext.grid.plugin.Exporter",
    typeAlias: 'gridexporterplugin',
    ptype: 'gridexporter',

    validParentTypes: [
        'grid'
    ],

    toolbox: {
        name: 'Exporter Plugin',
        iconCls: 'icon-default',
        category: ['Grid Plugins'],
        groups: ["Grids", "Extensions", "Premium"]
    },

    init: function() {
        this.setReference({ name: 'plugins', type: 'array' });
    }
});
